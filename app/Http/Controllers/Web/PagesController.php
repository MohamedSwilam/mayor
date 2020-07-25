<?php


namespace App\Http\Controllers\Web;


use App\Feedback;
use App\Http\Controllers\Controller;
use App\Property;

class PagesController extends Controller
{
    public function home(){
        $properties = Property::where('view_in_home','1')->get();
        $feedback = Feedback::all();

        return view('pages.home', [
            'properties' => $properties,
            'feedback' => $feedback
        ]);
    }

    public function properties() {
        $properties = Property::all();

        return view('pages.properties', [
            'properties' => $properties,
        ]);
    }

    public function property($id) {
        $property = Property::find($id);

        return view('pages.property-details', [
            'property' => $property,
        ]);
    }
}
