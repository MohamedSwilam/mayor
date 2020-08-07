<?php

namespace App\Http\Controllers;

use App\Account;
use App\Client;
use App\IndexResponse;
use App\Reservation;
use App\Http\Requests\ReservationRequest;

use App\ReservationStatuses;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\ReservationTransformer;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use function Symfony\Component\String\s;

class ReservationController extends Controller
{

    public function index()
    {

        $this->authorize('index', Reservation::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Reservation::with(['clients', 'clients.user', 'properties', 'reservation_status'])))->execute()
                , new ReservationTransformer()
            )
        );
    }

    public function browse_my_reservations()
    {
        $this->authorize('browse_my_reservations', Reservation::class);
        $user_id=Request()->user()->id;

        $clinet_id=Client::where('user_id',$user_id)->pluck('id');
        $role=User::where('id',$user_id)->with(['roles'])->get();
        if($role[0]['roles'][0]['name']=== 'Super Admin' || $role[0]['roles'][0]['name']=== 'Admin')
        {
            return ResponseFacade::indexRespond(
                fractal(
                    (new IndexResponse(Reservation::with(['clients', 'clients.user', 'properties', 'reservation_status'])))->execute()
                    , new ReservationTransformer()
                )
            );
        }
        else {
            return ResponseFacade::indexRespond(
                fractal(
                    (new IndexResponse(Reservation::where('client_id', $clinet_id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])))->execute()
                    , new ReservationTransformer()
                )
            );
        }
    }



    public function store(ReservationRequest $request)
    {
        $this->authorize('store', Reservation::class);
        $user_id = Request()->user()->id;
        $client_id = Client::where('user_id', $user_id)->pluck('id');

        $startDate = explode(" ", $request->check_in, 2)[0];
        $endDate = explode(" ", $request->check_out, 2)[0];
        $check_in_validation = Reservation::where('property_id', $request->property_id)
        ->whereBetween('check_in', [$startDate, $endDate])->count();
        $check_in_after_onther_check_in_validation = Reservation::where('property_id', $request->property_id)
            ->where('check_in',"<=", $startDate)->where('check_out',">", $startDate)->count();
        $check_out_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_out', [$startDate, $endDate])->count();
        $check_out_before_onther_check_out_validation = Reservation::where('property_id', $request->property_id)
            ->where('check_in',"<=", $endDate)->where('check_out',">=", $endDate)->count();

//        die($check_in_validation_2 ."___".$check_out_validation_2);

        if(count($client_id)==0)
        {
            $request['email'];
            $client= Account::where('email', $request['email'])->with(['user','user.client'])->get();
            $client_id= $client[0]['user']['client']['id'];
        }
        else{
            $client_id=$client_id[0];
        }
        if($check_in_validation == 0 && $check_out_validation == 0 && $check_in_after_onther_check_in_validation == 0 && $check_out_before_onther_check_out_validation == 0   ) {
            $request['check_out']=date('Y-m-d H:i:s',strtotime($request->check_out));
            $request['check_in']=date('Y-m-d H:i:s',strtotime($request->check_in));
            die(json_encode($request->toArray()));
            $reservation = Reservation::create(array_merge($request->toArray(),['client_id' =>$client_id, 'status_id' => 2]));
            return ResponseFacade::createRespond(
                fractal(
                    Reservation::where('id', $reservation->id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                    new ReservationTransformer()
                )
            );
        }
        else{
            if ($check_in_validation >0)
            {
                return ResponseFacade::updateRespond(
                    fractal(
                        Reservation::where('property_id', $request->property_id)
                            ->whereBetween('check_in', [$startDate, $endDate])->get(['check_in',"check_out"]),new ReservationTransformer()
                    ), 'Sorry this duration is reserved by another client', 422
                );

            }
            elseif($check_out_validation >0)
            {
                return ResponseFacade::updateRespond(
                fractal(
                    Reservation::where('property_id', $request->property_id)
                        ->whereBetween('check_out', [$startDate, $endDate])->get(['check_in',"check_out"]),new ReservationTransformer()
                ), 'Sorry this duration is reserved by another client', 422);
            }
            elseif($check_in_after_onther_check_in_validation >0)
            {
                return ResponseFacade::updateRespond(
                fractal(
                    Reservation::where('property_id', $request->property_id)
                        ->where('check_in',"<=", $startDate)->where('check_out',">", $startDate)->get(['check_in',"check_out"]),new ReservationTransformer()
                ), 'Sorry this duration is reserved by another client', 422);
            }
            elseif($check_out_before_onther_check_out_validation >0)
            {
                return ResponseFacade::updateRespond(
                fractal(
                    Reservation::where('property_id', $request->property_id)
                        ->where('check_in',"<=", $endDate)->where('check_out',">=", $endDate)->get(['check_in',"check_out"])
                ), 'Sorry this duration is reserved by another client', 422);
            }
        }
    }


    public function show($id)
    {
        $this->authorize('show', Reservation::class);
        return ResponseFacade::showRespond(
            fractal(
                Reservation::where('id', $id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                new ReservationTransformer()
            )
        );
    }

    public function show_my_reservation($id)
    {
        $this->authorize('show_my_reservation', Reservation::class);
        $user_id = Request()->user()->id;
        $client_id = Client::where('user_id', $user_id)->pluck('id');
        $my_reservation = Reservation::where('client_id',$client_id)->where("id",$id)->get();
         if (count($my_reservation) == 0) {
            $this->authorize('show', Reservation::class);
            return ResponseFacade::showRespond(
                fractal(
                    Reservation::where('client_id', $client_id)->where("id", $id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                    new ReservationTransformer()
                )
            );
        }
        else{
            return ResponseFacade::showRespond(
                fractal(
                    Reservation::where('client_id', $client_id)->where("id", $id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                    new ReservationTransformer()
                )
            );
        }
    }


    public function update(ReservationRequest $request, $id)
    {

        $this->authorize('update', Reservation::class);

        $resevation = Reservation::find($id);
        $data = $request->validated();
//        die(json_encode($data));
        $startDate = explode(" ", $request->check_in, 2)[0];
        $endDate = explode(" ", $request->check_out, 2)[0];
        $check_in_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_in', [$startDate, $endDate])->count();
        $check_in_after_onther_check_in_validation = Reservation::where('property_id', $request->property_id)
            ->where('check_in',"<=", $startDate)->where('check_out',">", $startDate)->count();
        $check_out_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_out', [$startDate, $endDate])->count();
        $check_out_before_onther_check_out_validation = Reservation::where('property_id', $request->property_id)
            ->where('check_in',"<=", $endDate)->where('check_out',">=", $endDate)->count();;

        if($check_in_validation == 0 && $check_out_validation == 0  )
        {
//           die(json_encode($data));
            $resevation->update($data);
            return ResponseFacade::createRespond(
                fractal(
                    Reservation::where('id', $resevation->id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                    new ReservationTransformer()
                )
            );
        }
        else{
            if ($check_in_validation >0)
            {
                die("2");
                return ResponseFacade::createRespond(
                    fractal(
                        Reservation::where('property_id', $request->property_id)
                            ->whereBetween('check_in', [$startDate, $endDate])->get(['check_in',"check_out"]),new ReservationTransformer())
                );

            }
            elseif($check_out_validation >0)
            {
                die("3");
                return ResponseFacade::createRespond(
                fractal(
                    Reservation::where('property_id', $request->property_id)
                        ->whereBetween('check_out', [$startDate, $endDate])->get(['check_in',"check_out"]),new ReservationTransformer()));
            }
        }

    }
    public function edit_my_reservations(ReservationRequest $request, $id)
    {
        $this->authorize('edit_my_reservation', Reservation::class);
        $user_id = Request()->user()->id;
        $client = Client::where('user_id', $user_id)->get();
        $reservation = Reservation::find($id);

        $startDate = explode(" ", $request->check_in, 2)[0];
        $endDate = explode(" ", $request->check_out, 2)[0];
        $check_in_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_in', [$startDate, $endDate])->count();
        $check_in_after_onther_check_in_validation = Reservation::where('property_id', $request->property_id)
            ->where('check_in',"<=", $startDate)->where('check_out',">", $startDate)->count();
        $check_out_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_out', [$startDate, $endDate])->count();
        $check_out_before_onther_check_out_validation = Reservation::where('property_id', $request->property_id)
            ->where('check_in',"<=", $endDate)->where('check_out',">=", $endDate)->count();


        $data = $request->validated();

        if ($reservation['client_id'] == $client[0]['id']) {
            if($check_in_validation == 0 && $check_out_validation == 0 )
            {

                $data['check_out']=date('Y-m-d H:i:s',strtotime($data['check_out']));
                $data['check_in']=date('Y-m-d H:i:s',strtotime($data['check_in']));
                $reservation->update($data);
                return ResponseFacade::createRespond(
                    fractal(
                        Reservation::where('id', $reservation->id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                        new ReservationTransformer()
                    )
                );
            }
            else{
               if ($check_in_validation >0)
               {
                   return ResponseFacade::createRespond(
                       fractal(
                   Reservation::where('property_id', $request->property_id)
                       ->whereBetween('check_in', [$startDate, $endDate])->get(['check_in',"check_out"]),new ReservationTransformer())
                   );

               }
               elseif($check_out_validation >0)
               {return ResponseFacade::createRespond(
                   fractal(
                  Reservation::where('property_id', $request->property_id)
                       ->whereBetween('check_out', [$startDate, $endDate])->get(['check_in',"check_out"])));
               }
               elseif($check_in_after_onther_check_in_validation >0)
               {return ResponseFacade::createRespond(
                   fractal(
                        Reservation::where('property_id', $request->property_id)
                           ->where('check_in',"<=", $startDate)->where('check_out',">", $startDate)->get(['check_in',"check_out"])));
               }
               elseif($check_out_before_onther_check_out_validation >0)
               {return ResponseFacade::createRespond(
                   fractal(
                       Reservation::where('property_id', $request->property_id)
                           ->where('check_in',"<=", $endDate)->where('check_out',">=", $endDate)->get(['check_in',"check_out"])));
               }
            }
        }
        else {
            return ("you are not authorized");
        }
    }

    public function get_reservation_dates($id)
    {

        return ResponseFacade::showRespond(
            fractal(
                Reservation::where('property_id',$id)->get(['check_in',"check_out"]),
                new ReservationTransformer()
            )
        );

    }
    public function destroy($id)
    {
        $this->authorize('destroy', Reservation::class);

        Reservation::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
    public function delete_my_reservation($id)
    {
        $this->authorize('delete_my_reservation', Reservation::class);
        $user_id = Request()->user()->id;
        $client = Client::where('user_id', $user_id)->get();

        $resevation=Reservation::find($id);
        if ($resevation['client_id'] == $client[0]['id'] ) {
            Reservation::find($id)->delete();
            return ResponseFacade::deleteRespond();
        }
        else{
            $this->authorize('destroy', Reservation::class);
            Reservation::find($id)->delete();
            return ResponseFacade::deleteRespond();

        }

    }

    public function getAllStatus()
    {
        return ReservationStatuses::all();
    }
}
