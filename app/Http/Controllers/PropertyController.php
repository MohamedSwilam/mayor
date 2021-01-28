<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\Image;
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
                (new IndexResponse(Property::with([])))->execute()
                , new PropertyTransformer()
            )
        );
    }


    public function store(PropertyRequest $request)
    {
//        die('sasaa');
        $this->authorize('store', Property::class);
        $data = $request->validated();
        $data['main_home_image'] = download_file('main_home_image', config('paths.property.create'));
        $data['main_details_image'] = download_file('main_details_image', config('paths.property.create'));
        $property = Property::create($data);
//        die($data['images']);
        $i=0;
        $imagesDes =array($request['imagesDesc']);
        foreach ($data['images'] as $index =>  $image ){

            $data = array();
            $data['source'] = downloadImage($image, config('paths.property.create'));
            $data['description'] =$imagesDes[0][$index] ;
            $data['property_id'] = $property->id;
            Image::create($data);
            $i++;
        }

        return ResponseFacade::createRespond(
            fractal(
                Property::where('id', $property->id)->with(['images'])->first(),
                new PropertyTransformer()
            )
        );
    }


    public function show($id)
    {
        $this->authorize('show', Property::class);
        return ResponseFacade::showRespond(
            fractal(
                Property::where('id', $id)->with([ 'images'])->first(),
                new PropertyTransformer()
            )
        );
    }

    public function update(PropertyRequest $request, $id)
    {
        $this->authorize('update', Property::class);

        $property = Property::find($id);
        $data = $request->validated();
        if (isset($data['main_home_image'])) {
            $data['main_home_image'] = download_file('main_home_image', config('paths.property.create'));
        }

        if (isset($data['main_details_image'])) {
            $data['main_details_image'] = download_file('main_details_image', config('paths.property.create'));
        }

        $property->update($data);

        if (isset($data['images'])) {
            if (count($data['images']) > 0) {
                Image::where('property_id', $property->id)->delete();
                foreach ($data['images'] as $image){
                    $data = array();
                    $data['source'] = downloadImage($image, config('paths.property.create'));
                    $data['description'] = 'No Description';
                    $data['property_id'] = $property->id;
                    Image::create($data);
                }
            }
        }

        return ResponseFacade::updateRespond(
            fractal(
                Property::where('id', $property->id)->with([])->first(),
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
