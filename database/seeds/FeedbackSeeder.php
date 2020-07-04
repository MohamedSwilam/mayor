<?php

use App\Feedback;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        Feedback::truncate();


        factory(Feedback::class, 50)->create();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Model::reguard();
    }
}
