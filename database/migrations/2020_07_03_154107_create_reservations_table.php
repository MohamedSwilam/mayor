<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('property_id');
            $table->unsignedBigInteger('client_id');
            $table->timestamp("check_in")->default();
            $table->timestamp("check_out");
            $table->unsignedBigInteger("status_id");
            $table->timestamps();
            $table->foreign('property_id')->references('id')->on('properties')->onDelete('cascade');
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->foreign('status_id')->references('id')->on('reservation_statuses')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
