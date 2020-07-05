<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Client;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Client::class, function (Faker $faker) {
    return [
        'user_id' => factory(App\User::class),
        'image' =>"https://source.unsplash.com/random",
        'ssn' => Str::random(14),
        'mobile' => $faker->phoneNumber,
        'address' => $faker->address,
        'nationality'=>$faker->country,
    ];
});
