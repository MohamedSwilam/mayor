<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesAndPermissionsSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ClientSeeder::class);
        $this->call(PropertySeeder::class);
        $this->call(ReservationSeeder::class);
        $this->call(FeedbackSeeder::class);
    }
}
