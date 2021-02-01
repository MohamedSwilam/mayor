<?php


use App\propertyType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertyTypeSeed extends Seeder
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

        propertyType::truncate();


        factory(propertyType::class, 4)->create();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Model::reguard();
    }
}
