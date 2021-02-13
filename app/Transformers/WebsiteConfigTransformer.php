<?php

namespace App\Transformers;

use App\WebsiteConfig;
use League\Fractal\TransformerAbstract;

class WebsiteConfigTransformer extends TransformerAbstract
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
    public function transform(WebsiteConfig $websiteConfig)
    {
        $data = $websiteConfig->toArray();
        return $data;
    }
}
