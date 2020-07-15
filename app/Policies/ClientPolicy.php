<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ClientPolicy
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
        return request()->user()->hasPermissionTo('create-client');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-client');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-client');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-client');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-client');
    }
}
