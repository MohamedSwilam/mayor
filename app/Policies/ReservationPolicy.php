<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReservationPolicy
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
        return request()->user()->hasPermissionTo('create-reservation');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-reservation');
    }

    public function browse_my_reservations()
    {
        return request()->user()->hasPermissionTo('browse-my-reservations');
    }
    public function edit_my_reservation()
    {
        return request()->user()->hasPermissionTo('edit-my-reservation');
    }
    public function delete_my_reservation()
    {
        return request()->user()->hasPermissionTo('delete-my-reservation');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-reservation');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-reservation');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-reservation');
    }
}
