<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->text("information");
            $table->text("description");
            $table->string("location");
            $table->string("address");
            $table->text("address_desc");
            $table->string("main_home_image");
            $table->string("main_details_image");
            $table->string("dinner_price");
            $table->string("lunch_price");
            $table->string("sqm");
            $table->double("price");
            $table->integer("no_of_rooms");
            $table->integer("no_of_baths");
            $table->integer("no_of_floors");
            $table->boolean("has_pool");
            $table->boolean("has_garden");
            $table->boolean("view_in_home");
            $table->boolean("has_tv");
            $table->boolean("has_dvd");
            $table->boolean("has_music_player");
            $table->boolean("has_washing_machine");
            $table->boolean("has_wifi_internet");
            $table->boolean("has_car_parking");
            $table->boolean("has_full_kitchen");
            $table->boolean("has_air_condition");
            $table->unsignedBigInteger('property_type_id');
            $table->foreign('property_type_id')->references('id')->on('property_types')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
