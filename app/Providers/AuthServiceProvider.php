<?php

namespace App\Providers;

use App\Client;
use App\Feedback;
use App\Message;
use App\Policies\ClientPolicy;
use App\Policies\FeedbackPolicy;
use App\Policies\MessagePolicy;
use App\Policies\PermissionPolicy;
use App\Policies\PropertyPolicy;
use App\Policies\ReservationPolicy;
use App\Policies\RolePolicy;
use App\Policies\UserPolicy;
use App\Property;
use App\Reservation;
use App\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
        User::class => UserPolicy::class,
        Role::class => RolePolicy::class,
        Permission::class => PermissionPolicy::class,
        Reservation::class => ReservationPolicy::class,
        Property::class => PropertyPolicy::class,
        Feedback::class => FeedbackPolicy::class,
        Client::class => ClientPolicy::class,
        Message::class => MessagePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
