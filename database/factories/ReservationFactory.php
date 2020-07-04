<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Reservation;
use App\Property;
use App\Client;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
//        'property_id', 'client_id', 'checkin','checkout','is_canceled','password',
$factory->define(Reservation::class, function (Faker $faker) {
    return [
        'property_id' => Property::all()->random()->id,
        'client_id' =>Client::all()->random()->id,
        'checkin' => $faker->date(),
        'checkout' => $faker->date(),
        'is_canceled' => $faker->boolean,
        'password' => $faker->password(4,8),
    ];
});
