<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{

    protected $fillable = [
        'property_id', 'client_id', 'checkin','checkout','is_canceled','password',
    ];

    public function clients()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
    public function properties()
    {
        return $this->belongsTo(Property::class, 'property_id');
    }

}
