<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Message;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Message::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        'message' => $faker->paragraph(2),
        'phone' => $faker->phoneNumber,
    ];
});
