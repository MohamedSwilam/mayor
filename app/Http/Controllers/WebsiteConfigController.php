<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\Http\Requests\WebsiteConfigRequest;
use App\Image;
use App\Property;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\PropertyTransformer;
use App\Transformers\WebsiteConfigTransformer;
use App\WebsiteConfig;
use App\WebsiteConfigimages;
use Illuminate\Http\Request;

class WebsiteConfigController extends Controller
{

    public function update(WebsiteConfigRequest $request, $id)
    {
        $this->authorize('update', Property::class);
        $websiteConfig = WebsiteConfig::find($id);
        $data = $request->validated();
        if (isset($data['welcome_image'])) {

            $data['welcome_image'] = '/storage/property/'.download_file('welcome_image', config('paths.property.create'));
        }

        $websiteConfig->update($data);

        $imagesDes = array($request['imagesDesc']);

            if (count($data['images']) > 0) {
                WebsiteConfigimages::where('Website_config_id', $websiteConfig->id)->delete();
                foreach ($data['images'] as $index => $image) {
                    $data = array();
                    $data['source'] = '/storage/property/'.downloadImage($image, config('paths.property.create'));
                    $data['description'] = $imagesDes[0][$index];;
                    $data['Website_config_id'] = $websiteConfig->id;
                    WebsiteConfigimages::create($data);
                }
            }

        return ResponseFacade::updateRespond(
            fractal(
                WebsiteConfigimages::where('id', $websiteConfig->id)->with([])->first(),
                new WebsiteConfigTransformer()
            )
        );
    }


    public function show($id)
    {
        $id=1;
        $this->authorize('show', Property::class);
        return ResponseFacade::showRespond(
            fractal(
                WebsiteConfig::where('id', $id)->with([])->first(),
                new WebsiteConfigTransformer()
            )
        );
    }
}
