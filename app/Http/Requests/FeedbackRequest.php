<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeedbackRequest extends FormRequest
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
                'feedback' => 'required|string',
                'image' => 'required|max:2048|mimes:jpeg,png',
                'title' => 'required|string',
                'name' => 'required|string',
            ];
        }
        else if (sizeof($segments) == 3){
            return [
                'feedback' => 'required|string',
                'image' => 'max:2048|mimes:jpeg,png',
                'title' => 'required|string',
                'name' => 'required|string',
            ];
        }

    }
}
