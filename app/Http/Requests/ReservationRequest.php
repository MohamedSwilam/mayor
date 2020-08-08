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
                'check_in' => 'required|date|after:now',
                'check_out' => 'required|date|after:check_in',
                'client_id' => 'exists:clients,id',
                'property_id' =>'exists:properties,id',
                'status_id' => 'exists:reservation_statuses,id'

            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'check_in' => 'date|after:now',
                'check_out' =>'date|after:now',
                'status_id' =>'exists:reservation_statuses,id',
                'client_id' =>'exists:clients,id',
                'property_id' =>'exists:properties,id',


            ];
        }
    }
    /**
     * Custom message for validation
     *
     * @return array
     */


}
