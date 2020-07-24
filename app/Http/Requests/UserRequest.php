<?php

namespace App\Http\Requests;

use App\User;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $segments = request()->segments();
        if (sizeof($segments) == 2){
            return [
                'email' => 'required|email|unique:accounts,email',
                'password' => 'required|min:8',
                'first_name' => 'required',
                'last_name' => 'required',
                'role' => 'required|exists:roles,name',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'email' => 'email|unique:accounts,email,'.User::where('id', $segments[2])->with(['accounts'])->get()[0]['accounts'][0]['id'],
                'password' => 'min:8',
                'first_name' => '',
                'last_name' => '',
                'role' => 'exists:roles,name',
            ];
        }
    }
}
