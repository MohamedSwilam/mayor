<?php

namespace App\Http\Controllers;

use App\Client;
use App\IndexResponse;
use App\Reservation;
use App\Http\Requests\ReservationRequest;

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
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Reservation::where('client_id',$clinet_id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])))->execute()
                , new ReservationTransformer()
            )
        );
    }



    public function store(ReservationRequest $request)
    {
        $this->authorize('store', Reservation::class);

        $startDate = explode(" ", $request->check_in, 2)[0];
        $endDate = explode(" ", $request->check_out, 2)[0];
        $check_in_validation = Reservation::where('property_id', $request->property_id)
        ->whereBetween('check_in', [$startDate, $endDate])->count();
        $check_out_validation = Reservation::where('property_id', $request->property_id)
        ->whereBetween('check_out', [$startDate, $endDate])->count();

        if($check_in_validation == 0 && $check_out_validation == 0 ) {
            $reservation = Reservation::create($request->toArray());
            return ResponseFacade::createRespond(
                fractal(
                    Reservation::where('id', $reservation->id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                    new ReservationTransformer()
                )
            );
        }
        else{
            return ResponseFacade::createRespond( [],"sorry, there are reservation from another clinet inn the same date" ,422);

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


    public function update(ReservationRequest $request, $id)
    {
        $this->authorize('update', Reservation::class);

        $resevation = Reservation::find($id);
        $data = $request->validated();

        $startDate = explode(" ", $request->check_in, 2)[0];
        $endDate = explode(" ", $request->check_out, 2)[0];
        $check_in_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_in', [$startDate, $endDate])->count();
        $check_out_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_out', [$startDate, $endDate])->count();

        if($check_in_validation == 0 && $check_out_validation == 0 ) {
            $resevation->update($data);
        }

        return ResponseFacade::createRespond(
            fractal(
                Reservation::where('id', $resevation->id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                new ReservationTransformer()
            )
        );
    }
    public function edit_my_reservations(ReservationRequest $request, $id)
    {

//        $this->authorize('edit_my_reservation', Reservation::class);
        $user_id = Request()->user()->id;
        $clinet_id = Client::where('user_id', $user_id)->pluck('id');
        $resevation = Reservation::find($id);

        $startDate = explode(" ", $request->check_in, 2)[0];
        $endDate = explode(" ", $request->check_out, 2)[0];
        $check_in_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_in', [$startDate, $endDate])->count();
        $check_out_validation = Reservation::where('property_id', $request->property_id)
            ->whereBetween('check_out', [$startDate, $endDate])->count();


        $data = $request->validated();

        if ($resevation['client_id'] == $clinet_id . "") {
            if ($check_in_validation == 0 && $check_out_validation == 0) {
                $resevation->update($data);

                return ResponseFacade::createRespond(
                    fractal(
                        Reservation::where('id', $resevation->id)->with(['clients', 'clients.user', 'properties', 'reservation_status'])->first(),
                        new ReservationTransformer()
                    )
                );
            }
        }
        else {
            return ("you are not authorized");
        }
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
        $clinet_id = Client::where('user_id', $user_id)->pluck('id');

        $resevation=Reservation::find($id);
        if ($resevation['client_id'] == $clinet_id . "") {
            Reservation::find($id)->delete();
            return ResponseFacade::deleteRespond();
        }
        else{
            return ("you are not authorized");
        }

    }
}
