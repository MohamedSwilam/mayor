<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Client;
use App\Feedback;
use App\Property;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

//        'property_id', 'client_id', 'text',
$factory->define(Feedback::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'title' => $faker->jobTitle,
        'feedback' => $faker->paragraph(2),
        'image' => "default.jpg"
    ];
});
