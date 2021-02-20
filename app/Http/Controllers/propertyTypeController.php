<?php

namespace App\Http\Controllers;

use App\Feedback;
use App\Http\Requests\FeedbackRequest;
use App\Http\Requests\propertyTypeRequest;
use App\IndexResponse;
use App\propertyType;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\FeedbackTransfromer;
use App\Transformers\propertyTypeTransformer;
use Illuminate\Http\Request;

class propertyTypeController extends Controller
{
    public function index()
    {
        $this->authorize('index', propertyType::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(propertyType::with([])))->execute()
                , new propertyTypeTransformer()
            )
        );
    }


    public function store(propertyTypeRequest $request)
    {
        $this->authorize('store', propertyType::class);
        $data = $request->validated();

        $propertyType = propertyType::create($data);

        return ResponseFacade::createRespond(
            fractal(
                propertyType::where('id', $propertyType->id)->first(),
                new propertyTypeTransformer()
            )
        );

    }


    public function show($id)
    {
        $this->authorize('show', propertyTypeRequest::class);
        return ResponseFacade::showRespond(
            fractal(
                propertyType::where('id', $id)->with([])->first(),
                new propertyTypeTransformer()
            )
        );
    }


    public function update(propertyTypeRequest $request, $id)
    {
        $this->authorize('update', propertyType::class);

        $feedback = propertyType::find($id);
        $data = $request->validated();

        $feedback->update($data);

        return ResponseFacade::createRespond(
            fractal(
                propertyType::where('id', $feedback->id)->with([])->first(),
                new propertyTypeTransformer()
            )
        );
    }


    public function destroy($id)
    {
        $this->authorize('destroy', propertyType::class);

        propertyType::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
}
