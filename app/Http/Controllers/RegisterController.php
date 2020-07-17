<?php

namespace App\Http\Controllers;

use App\Account;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\ReservationRequest;
use App\Responses\Facades\ResponseFacade;
use App\Transformers\UserTransformer;
use App\User;
use App\Client;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RegisterController extends Controller
{


    public function register(RegisterRequest $request)
    {
        $data= $request->validated();
       $user= User::create($data);
        $data['password'] = bcrypt($data['password']);
        $data['user_id'] = $user->id;

        Account::create($data);

        $user->assignRole("Client");
        $data['image'] = download_image('image', config('paths.client-image.create'));

        $client = Client::create($data);

        return ResponseFacade::createRespond(
            fractal(
                Client::where('id', $client->id)->with(['accounts', 'users.roles.permissions', 'users.permissions','users'])->first(),
                new UserTransformer()
            )
        );

    }

}
