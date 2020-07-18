<?php

namespace App\Http\Controllers;

use App\IndexResponse;
use App\Reservation;
use App\Http\Requests\ReservationRequest;

use App\Responses\Facades\ResponseFacade;
use App\Transformers\ReservationTransformer;
use App\User;
use Illuminate\Http\Request;

class ReservationController extends Controller
{

    public function index()
    {
        $this->authorize('index', Reservation::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Reservation::with(['clients','properties'])))->execute()
                , new ReservationTransformer()
            )
        );
    }


    public function store(ReservationRequest $request)
    {
        $this->authorize('store', Reservation::class);
//        $data = $request->validated();
//        die($request)
        $reservation=Reservation::create($request->toArray());
        return ResponseFacade::createRespond(
            fractal(
                Reservation::where('id', $reservation->id)->with(['clients','properties'])->first(),
                new ReservationTransformer()
            )
        );


    }


    public function show($id)
    {
        $this->authorize('show', Reservation::class);
        return ResponseFacade::showRespond(
            fractal(
                Reservation::where('id', $id)->with(['clients','properties'])->first(),
                new ReservationTransformer()
            )
        );
    }


    public function update(ReservationRequest $request, $id)
    {
        $this->authorize('update', Reservation::class);

        $resevation = Reservation::find($id);
        $data = $request->validated();
        $resevation->update($data);

        return ResponseFacade::createRespond(
            fractal(
                Reservation::where('id', $resevation->id)->with(['clients','properties'])->first(),
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
}
