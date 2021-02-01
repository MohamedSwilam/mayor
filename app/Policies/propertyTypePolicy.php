<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class propertyTypePolicy
{
    use HandlesAuthorization;

    public function __construct()
    {
        //
    }


    public function store()
    {
        return request()->user()->hasPermissionTo('create-propertyType');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-propertyType');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-propertyType');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-propertyType');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-propertyType');
    }


}
