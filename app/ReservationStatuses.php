<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservationStatuses extends Model
{
    protected $fillable = [
        'name', 'color'
    ];

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
