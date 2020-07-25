<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Property;
use Faker\Generator as Faker;
//'title', 'information', 'description','location',
//        'address','address_desc','main_home_image','main_details_image',
//        'dinner_price','lunch_price','sqm','price','no_of_rooms',
//        'no_of_baths','no_of_floors','has_pool','has_garden',
$factory->define(Property::class, function (Faker $faker) {
    return [

        'title'=> $faker->name,
        'information' => $faker->paragraph(3),
        'description' => $faker->paragraph(3),
        'location'=>"https://goo.gl/maps/D67dKEvPJYYwmyA16",
        'address'=>$faker->address,
        'address_desc'=>$faker->paragraph(2),
        'main_home_image'=>"default.png",
        'main_details_image'=>"https://source.unsplash.com/random",
        'dinner_price'=>$faker->randomFloat(null,50,300),
        'lunch_price'=>$faker->randomFloat(null,50,300),
        'sqm'=>$faker->randomFloat(null,50,3000),
        'price'=>$faker->randomFloat(null,50,15000),
        'no_of_rooms'=>$faker->randomDigit,
        'no_of_baths'=>$faker->randomDigit,
        'no_of_floors'=>$faker->randomDigit,
        'has_pool'=>$faker->boolean,
        'has_garden'=>$faker->boolean,
        'view_in_home'=>$faker->boolean,




    ];
});
