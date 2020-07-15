<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\IndexResponse;
use App\Reservation;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\PropertyTransformer;
use Illuminate\Http\Request;
use App\Property;


class PropertyController extends Controller
{
    public function index()
    {
        $this->authorize('index', Property::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Property::with(['feedbacks'])))->execute()
                , new PropertyTransformer()
            )
        );
    }


    public function store(PropertyRequest $request)
    {
        $this->authorize('store', Property::class);
        $data = $request->validated();
        Property::create($data);


    }


    public function show($id)
    {
        $this->authorize('show', Property::class);
        return ResponseFacade::showRespond(
            fractal(
                Property::where('id', $id)->with(['feedbacks'])->first(),
                new PropertyTransformer()
            )
        );
    }


    public function update(PropertyRequest $request, $id)
    {
        $this->authorize('update', Property::class);

        $resevation = Property::find($id);
        $data = $request->validated();
        $resevation->update($data);

        return ResponseFacade::createRespond(
            fractal(
                Property::where('id', $resevation->id)->with(['feedbacks'])->first(),
                new PropertyTransformer()
            )
        );
    }


    public function destroy($id)
    {
        $this->authorize('destroy', Property::class);

        Property::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
}
