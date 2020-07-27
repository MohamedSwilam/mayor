<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Reservation;
use App\Property;
use App\Client;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
//        'property_id', 'client_id', 'checkin','checkout','is_canceled','password',
$factory->define(Reservation::class, function (Faker $faker) {
    $start = $faker->dateTimeBetween('next Monday', 'next Monday +7 days');
    $end = $faker->dateTimeBetween($start, $start->format('Y-m-d H:i:s').' +2 days');
    return [
        'property_id' => Property::all()->random()->id,
        'client_id' =>Client::all()->random()->id,
        'check_in' => $start,
        'check_out' => $end,
        'status_id' => rand(1, 3),
    ];
});
