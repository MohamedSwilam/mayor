<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
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
                'checkin' => 'required|date',
                'checkout' => 'required|date',
                'password' => 'min:8',
                'client_id' => 'exists:clients,id',
                'property_id' => 'exists:properties,id'

            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'checkin' => 'required|date',
                'checkout' => 'required|date',
                'password' => 'min:8'

            ];
        }
    }
    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'client_id.exists' => 'client not found!',
//            'name.required' => 'Name is required!',
//            'password.required' => 'Password is required!'
        ];
    }


}