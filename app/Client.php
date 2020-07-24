<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends model
{
    protected $fillable = [
        'user_id', 'image', 'ssn','mobile','address','nationality',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function resrvations()
    {
        return $this->hasMany(Reservation::class);
    }
}
