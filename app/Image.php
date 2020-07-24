<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'source', 'description', 'property_id'
    ];


    public function property()
    {
        return $this->belongsTo(Property::class, 'property_id');
    }
}
