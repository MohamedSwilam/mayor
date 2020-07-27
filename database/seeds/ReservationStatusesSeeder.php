<?php

use Illuminate\Database\Seeder;
use App\ReservationStatuses;

class ReservationStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses = [
            [
                'name' => 'Accepted',
                'color' => 'success'
            ],
            [
                'name' => 'Pending',
                'color' => 'warning'
            ],
            [
                'name' => 'Refused',
                'color' => 'danger'
            ]
        ];

        foreach ($statuses as $status) {
            ReservationStatuses::create($status);
        }
    }
}
