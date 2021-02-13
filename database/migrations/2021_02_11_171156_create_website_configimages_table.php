<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebsiteConfigimagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('website_configimages', function (Blueprint $table) {
            $table->id();
            $table->text("source");
            $table->text("description");
            $table->unsignedBigInteger('Website_config_id');
            $table->foreign('Website_config_id')->references('id')->on('website_configs')->onDelete('cascade');

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
        Schema::dropIfExists('website_configimages');
    }
}
