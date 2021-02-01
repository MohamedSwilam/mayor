<?php


namespace App\Http\Controllers\Web;


use App\Feedback;
use App\Http\Controllers\Controller;
use App\Property;
use App\service;
use Illuminate\Http\Request;
use App\Message;

class PagesController extends Controller
{
    public function home(){
        $properties = Property::where('view_in_home','1')->get();
        $feedback = Feedback::all();
        $services = service::all();
        return view('pages.home', [
            'properties' => $properties,
            'feedback' => $feedback,
            'services' => $services,
        ]);
    }

    public function properties() {
        $properties = Property::all();

        return view('pages.properties', [
            'properties' => $properties,
        ]);
    }
    public function services() {
        $services = service::all();

        return view('pages.services', [
            'services' => $services,
        ]);
    }
    public function servicesandProperties() {
        $services = service::all();
        $property = Property::all();
        return view('pages.services', [
            'services' => $services,
            'property' => $property,
        ]);
    }

    public function property($id) {
        $property = Property::find($id);

        return view('pages.property-details', [
            'property' => $property,
        ]);
    }

    public function about(){
        $feedback = Feedback::all();
        return view('pages.about', [
            'feedback' => $feedback
        ]);
    }

     public function contact_us(Request $request){
         $data= $this->validate($request,[
             'name' => 'required|string',
             'message' => 'required|string',
             'phone' => 'required|numeric',
             'email' => 'required|email',
             'service_id' =>''
         ]);
         $message = Message::create($data);


         return view("pages.thanks" , ['data'=> $data]);
     }


}
