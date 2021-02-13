<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WebsiteConfig extends Model
{

    protected $fillable = [
        'welcome_title', 'welcome_p', 'total_donation', 'total_properties', 'total_volunteers', 'welcome_image',
    ];

    public function websiteConfigimages()
    {
        return $this->hasMany(WebsiteConfigimages::class);
    }
}
