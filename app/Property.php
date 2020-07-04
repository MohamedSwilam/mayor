<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title', 'information', 'description','location',
        'address','address_desc','main_home_image','main_details_image',
        'dinner_price','lunch_price','sqm','price','no_of_rooms',
        'no_of_baths','no_of_floors','has_pool','has_garden',
    ];

    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }

    public function resrvations()
    {
        return $this->hasMany(Reservation::class);
    }
}
