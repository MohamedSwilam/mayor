<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WebsiteConfigimages extends Model
{

    protected $fillable = [
        'source', 'description', 'Website_config_id'
    ];

    public function websiteConfig()
    {
        return $this->belongsTo(WebsiteConfig::class, 'Website_config_id');
    }


}
