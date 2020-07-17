<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
                'is_male'=> 'required|boolean',
                'image' => 'required|max:2048|mimes:jpeg,png',
                'ssn' => 'required|string',
                'mobile' => 'required',
                'address' => 'required|string',
                'nationality' => 'required|string',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'email' => 'email|unique:accounts,email',
                'password' => 'min:8',
                'first_name' => '',
                'last_name' => '',
                'image' => 'max:2048|mimes:jpeg,png',
                'ssn' => 'string',
                'mobile' => 'mobile',
                'address' => 'string',
                'nationality' => 'string',
            ];
        }
    }
}
