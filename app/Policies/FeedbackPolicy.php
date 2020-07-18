<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FeedbackPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-feedback');
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-feedback');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-feedback');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-feedback');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-feedback');
    }
}
