<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class propertyType extends Model
{
    protected $fillable = [
        'property_type',
    ];

    public function Property()
    {
        return $this->hasMany(Property::class);
    }
}
