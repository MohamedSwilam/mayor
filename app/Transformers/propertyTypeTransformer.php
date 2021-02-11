<?php

namespace App\Transformers;

use App\propertyType;
use League\Fractal\TransformerAbstract;

class propertyTypeTransformer extends TransformerAbstract
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
     * @return array
     */
    public function transform(propertyType $propertyType)
    {
        $data = $propertyType->toArray();

        return $data;
    }
}