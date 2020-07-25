<?php

namespace App\Http\Controllers;

use App\IndexResponse;
use App\Message;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\MessageTransformer;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        $this->authorize('index', Message::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Message::with([])))->execute()
                , new MessageTransformer()
            )
        );
    }

    public function store(Request $request)
    {

    }

    public function show($id)
    {
        $this->authorize('show', Message::class);
        return ResponseFacade::showRespond(
            fractal(
                Message::where('id', $id)->first(),
                new MessageTransformer()
            )
        );
    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {
        $this->authorize('destroy', Message::class);

        Message::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
}
