<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'user_id', 'image', 'ssn','mobile','address','nationality',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function feedbacks()
    {
        return $this->hasMany(Feedback::class);
    }
    public function resrvations()
    {
        return $this->hasMany(Reservation::class);
    }
}
