<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Client;

use App\User;


class ClientSeeder extends Seeder
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

        Client::truncate();


        factory(Client::class, 50)->create();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Model::reguard();

    }
}
