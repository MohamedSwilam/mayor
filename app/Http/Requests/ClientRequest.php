<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
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

                'image' => 'required|string',
                'ssn' => 'required|string|min:10',
                'mobile' => 'required|mobile|min:10',
                'address' => 'required|string',
                'nationality' => 'required|string',

            ];
        }
        else if (sizeof($segments) == 3){
            return [

                'image' => 'required|string',
                'ssn' => 'required|string|min:10',
                'mobile' => 'required|mobile|min:10',
                'address' => 'required|string',
                'nationality' => 'required|string',
            ];
        }

    }
}
