<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{

    protected $fillable = [
        'property_id', 'client_id', 'check_in','check_out','is_canceled','password','status_id'
    ];

    public function clients()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function properties()
    {
        return $this->belongsTo(Property::class, 'property_id');
    }

    public function reservation_status()
    {
        return $this->belongsTo(ReservationStatuses::class, 'status_id');
    }

}
