<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\propertyType;
use Faker\Generator as Faker;

$factory->define(propertyType::class, function (Faker $faker) {
    return [
        'property_type'=> $faker->name,
    ];
});
