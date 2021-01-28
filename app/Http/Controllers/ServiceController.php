<?php

namespace App\Http\Controllers;

use App\Http\Requests\serviceRequest;
use App\IndexResponse;
use App\Responses\Facades\ResponseFacade;
use App\service;
use App\Transformers\serviceTransformer;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $this->authorize('index', service::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(service::with([])))->execute()
                , new serviceTransformer()
            )
        );
    }



    public function store(serviceRequest $request)
    {
        $this->authorize('store', service::class);
        $data = $request->validated();

        $data['icon'] = "no icon";

        $service = service::create($data);

        return ResponseFacade::createRespond(
            fractal(
                service::where('id', $service->id)->first(),
                new serviceTransformer()
            )
        );

    }


    public function show($id)
    {
        $this->authorize('show', service::class);
        return ResponseFacade::showRespond(
            fractal(
                service::where('id', $id)->with([])->first(),
                new serviceTransformer()
            )
        );
    }


    public function edit(service $service)
    {
        //
    }


    public function update(Request $request, service $service)
    {
        //
    }

    public function destroy($id)
    {
        $this->authorize('destroy', service::class);
        service::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
}
