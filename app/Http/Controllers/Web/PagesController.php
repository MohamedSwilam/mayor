<?php


namespace App\Http\Controllers\Web;


use App\Feedback;
use App\Http\Controllers\Controller;
use App\Property;
use Illuminate\Http\Request;
use App\Message;

class PagesController extends Controller
{
    public function home(){
        $properties = Property::where('view_in_home','1')->get();
//        $properties = Property::where('id',51)->get();
        $feedback = Feedback::all();
        return view('pages.home', [
            'properties' => $properties,
            'feedback' => $feedback
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
             'phone' => 'required|string',
             'email' => 'required|email',
         ]);
         $message = Message::create($data);
         return view("pages.thanks" , ['data'=> $data]);

     }
}