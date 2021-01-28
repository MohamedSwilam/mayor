<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class servicePolicy
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
        return request()->user()->hasPermissionTo('create-service');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-service');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-service');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-service');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-service');
    }
}
