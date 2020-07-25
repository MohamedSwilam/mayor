<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
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
        return request()->user()->hasPermissionTo('create-message');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-message');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-message');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-message');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-message');
    }
}
