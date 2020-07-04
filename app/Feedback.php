<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable = [
        'property_id', 'client_id', 'text',
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
