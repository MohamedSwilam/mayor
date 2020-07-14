<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PropertyPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-property');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-property');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-property');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-property');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-property');
    }
}
