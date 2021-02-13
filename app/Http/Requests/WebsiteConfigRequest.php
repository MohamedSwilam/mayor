<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WebsiteConfigRequest extends FormRequest
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
                'welcome_title' => 'required|string',
                'welcome_p' => 'required|string',
                'total_donation' => 'required|string',
                'total_properties' => 'required|string',
                'total_volunteers' => 'required|string',
                'images' => '',
                'welcome_image' => 'required|max:2048|mimes:jpeg,png',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'welcome_title' => 'required|string',
                'welcome_p' => 'required|string',
                'total_donation' => 'required|string',
                'total_properties' => 'required|string',
                'total_volunteers' => 'required|string',
                'images' => '',
                'welcome_image' => 'required|max:2048|mimes:jpeg,png',
            ];
        }
    }
}
