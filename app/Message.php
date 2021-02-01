<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [

        'name', 'email', 'phone', 'message','service'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class, 'service_id');
    }


}
