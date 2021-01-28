<?php

namespace App\Transformers;

use App\service;
use League\Fractal\TransformerAbstract;

class serviceTransformer extends TransformerAbstract
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
    public function transform(service $feedback)
    {
        $data = $feedback->toArray();
        return $data;
    }
}
