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
//        die("sasas");
        $segments = request()->segments();
        if (sizeof($segments) == 2){
            return [
                'title' => 'required|string',
                'property_type_id' => 'required|string',
                'information' => 'required|string',
                'description' => 'required|string',
                'location' => 'required|url',
                'address' => 'required|string',
                'address_desc' => 'required|string',
                'main_home_image' => 'max:2048|mimes:jpeg,png',
                'main_details_image' => 'max:2048|mimes:jpeg,png',
                'images' => '',
                'dinner_price' => 'required|numeric',
                'lunch_price' => 'required|numeric',
                'sqm' => 'required|string',
                'price' => 'required|numeric',
                'no_of_rooms' => 'required|numeric',
                'no_of_baths' => 'required|numeric',
                'no_of_floors' => 'required|numeric',
                'has_pool' => 'required|boolean',
                'has_garden' => 'required|boolean',
                'view_in_home' => 'required|boolean',
                'imagesDesc'=>'',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'title' => 'required|string',
                'property_type_id' => 'required|string',
                'information' => 'required|string',
                'description' => 'required|string',
                'location' => 'required|url',
                'address' => 'required|string',
                'address_desc' => 'required|string',
                'main_home_image' => 'max:2048|mimes:jpeg,png',
                'main_details_image' => 'max:2048|mimes:jpeg,png',
                'images' => '',
                'dinner_price' => 'required|numeric',
                'lunch_price' => 'required|numeric',
                'sqm' => 'required|string',
                'price' => 'required|numeric',
                'no_of_rooms' => 'required|numeric',
                'no_of_floors' => 'required|numeric',
                'no_of_baths' => 'required|numeric',
                'has_pool' => 'required|boolean',
                'has_garden' => 'required|boolean',
                'view_in_home' => 'required|boolean',
                'imagesDesc'=>'',
            ];
        }

    }
}
