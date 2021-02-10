<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title', 'information', 'description', 'location', 'property_type_id',
        'address', 'address_desc', 'main_home_image', 'main_details_image',
        'dinner_price', 'lunch_price', 'sqm', 'price', 'no_of_rooms',
        'no_of_baths', 'no_of_floors', 'has_pool', 'has_garden', 'view_in_home', 'has_dvd',
        'has_tv',
        'has_music_player',
        'has_washing_machine',
        'has_wifi_internet',
        'has_car_parking',
        'has_full_kitchen',
        'has_air_condition',
    ];


    public function resrvations()
    {
        return $this->hasMany(Reservation::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function propertyType()
    {
        return $this->belongsTo(propertyType::class, 'property_type_id');
    }

}
