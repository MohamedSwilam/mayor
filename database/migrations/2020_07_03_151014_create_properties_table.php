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
            $table->double("latitude");
            $table->double("longitude");
            $table->string("address");
            $table->text("address_desc");
            $table->text("main_home_image");
            $table->text("main_details_image");
            $table->text("dinner_price");
            $table->text("lunch_price");
            $table->text("sqm");
            $table->double("price");
            $table->integer("no_of_rooms");
            $table->integer("no_of_baths");
            $table->integer("no_of_floors");
            $table->boolean("has_pool");
            $table->boolean("has_garden");




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
