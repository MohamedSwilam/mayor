<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Account;
use App\Responses\Facades\ResponseFacade;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $login_credentials = $request->validated();

        $data = Account::where('email', $login_credentials['email'])
            ->first();

        if (!empty($data)) {
            if (password_verify($login_credentials['password'], $data->password)) {
                $user = User::where('id', $data->user_id)->with(['accounts', 'roles','roles.permissions', 'permissions'])->first();

                return ResponseFacade::respond("login credentials correct", [
                    'user' => $user,
                    'access_token' => $user->createToken('token'),
                    'token_type' => 'Bearer',
                ], 200);
            }
        }

        return response()->json(['error' => 'Incorrect email or password'], Response::HTTP_UNAUTHORIZED);

    }
}
