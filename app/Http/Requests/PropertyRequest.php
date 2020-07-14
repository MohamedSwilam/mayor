<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PropertyRequest extends FormRequest
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
                'information' => 'required|string',
                'description' => 'required|text',
                'location' => 'required|url',
                'address' => 'required|string',
                'address_desc' => 'required|string',
                'main_home_image' => 'string',
                'main_details_image' => 'string',
                'dinner_price' => 'numeric',
                'lunch_price' => 'numeric',
                'sqm' => 'required|string',
                'price' => 'required|numeric',
                'locano_of_rooms' => 'required|numeric',
                'no_of_floors' => 'required|numeric',
                'has_pool' => 'required|boolean',
                'has_garden' => 'required|boolean',

            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'information' => 'required|string',
                'description' => 'required|text',
                'location' => 'required|url',
                'address' => 'required|string',
                'address_desc' => 'required|string',
                'main_home_image' => 'string',
                'main_details_image' => 'string',
                'dinner_price' => 'numeric',
                'lunch_price' => 'numeric',
                'sqm' => 'required|string',
                'price' => 'required|numeric',
                'no_of_rooms' => 'required|numeric',
                'no_of_floors' => 'required|numeric',
                'has_pool' => 'required|boolean',
                'has_garden' => 'required|boolean',

            ];
        }

    }
}
