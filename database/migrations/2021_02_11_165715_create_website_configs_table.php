<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebsiteConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('website_configs', function (Blueprint $table) {
            $table->id();
            $table->text("welcome_title");
            $table->text("welcome_p");
            $table->text("total_donation");
            $table->text("total_properties");
            $table->text("total_volunteers");
            $table->string("welcome_image");
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
        Schema::dropIfExists('website_configs');
    }
}
