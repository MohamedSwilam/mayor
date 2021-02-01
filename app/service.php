<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class service extends Model
{
    protected $fillable = [
        'service', 'description', 'icon'
    ];

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
