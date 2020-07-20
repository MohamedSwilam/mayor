<?php

namespace App\Http\Controllers;

use App\Client;
use App\User;
use App\Http\Requests\ClientRequest;
use App\IndexResponse;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\ClientTransformer;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $this->authorize('index', Client::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Client::with(['user','feedbacks'])))->execute()
                , new ClientTransformer()
            )
        );
    }


    public function store(ClientRequest $request)
    {
        die($request);
        $this->authorize('store', Client::class);

        $data = $request->validated();
        User::create($data);
        Client::create($data);


    }


    public function show($id)
    {
        $this->authorize('show', Client::class);
        return ResponseFacade::showRespond(
            fractal(
                Client::where('id', $id)->with(['user','feedbacks'])->first(),
                new ClientTransformer()
            )
        );
    }


    public function update(ClientRequest $request, $id)
    {
        $this->authorize('update', Client::class);

        $feedback = Client::find($id);
        $data = $request->validated();
        $feedback->update($data);

        return ResponseFacade::createRespond(
            fractal(
                Client::where('id', $feedback->id)->with(['clients','properties'])->first(),
                new ClientTransformer()
            )
        );
    }


    public function destroy($id)
    {
        $this->authorize('destroy', Client::class);

        Client::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
}
