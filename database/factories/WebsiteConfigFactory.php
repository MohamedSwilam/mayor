<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\WebsiteConfig;
use Faker\Generator as Faker;

$factory->define(WebsiteConfig::class, function (Faker $faker) {
    return [
        'welcome_title' => "Welcome to Reham Refaat ",
        'welcome_p' => "write you paragraph here",
        'total_donation' =>"20000 LE",
        'welcome_image' =>"/images/website/welcome-1.jpg",
        'total_properties' =>"10",
        'total_volunteers' =>"20"
    ];
});
