<?php

namespace App\Http\Controllers;


use App\Feedback;
use App\Http\Requests\FeedbackRequest;
use App\IndexResponse;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\FeedbackTransfromer;
use App\Transformers\PropertyTransformer;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index()
    {
        $this->authorize('index', Feedback::class);
        return ResponseFacade::indexRespond(
            fractal(
                (new IndexResponse(Feedback::with([])))->execute()
                , new FeedbackTransfromer()
            )
        );
    }


    public function store(FeedbackRequest $request)
    {
        $this->authorize('store', Feedback::class);
        $data = $request->validated();

        $data['image'] = download_file('image', config('paths.feedback.create'));

        $feedback = Feedback::create($data);

        return ResponseFacade::createRespond(
            fractal(
                Feedback::where('id', $feedback->id)->first(),
                new FeedbackTransfromer()
            )
        );

    }


    public function show($id)
    {
        $this->authorize('show', Feedback::class);
        return ResponseFacade::showRespond(
            fractal(
                Feedback::where('id', $id)->with([])->first(),
                new FeedbackTransfromer()
            )
        );
    }


    public function update(FeedbackRequest $request, $id)
    {
        $this->authorize('update', Feedback::class);

        $feedback = Feedback::find($id);
        $data = $request->validated();

        if (isset($data['image'])) {
            $data['image'] = download_file('image', config('paths.feedback.create'));
        }

        $feedback->update($data);

        return ResponseFacade::createRespond(
            fractal(
                Feedback::where('id', $feedback->id)->with([])->first(),
                new FeedbackTransfromer()
            )
        );
    }


    public function destroy($id)
    {
        $this->authorize('destroy', Feedback::class);

        Feedback::find($id)->delete();
        return ResponseFacade::deleteRespond();
    }
}
