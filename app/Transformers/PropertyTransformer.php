<?php

namespace App\Transformers;

use App\Property;
use League\Fractal\TransformerAbstract;

class PropertyTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Property $property
     * @return array
     */
    public function transform(Property $property)
    {
        $data = $property->toArray();
        $data['main_home_image'] = $data['main_home_image']? config('paths.property.get').$data['main_home_image']:null;
        $data['main_details_image'] = $data['main_details_image']? config('paths.property.get').$data['main_details_image']:null;

        return $data;
    }
}
