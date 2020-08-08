<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->resource('users', 'UserController');

Route::post('login', 'LoginController@login');
Route::post('register', 'RegisterController@register');

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'UserController@update');
    Route::get('{id}', 'UserController@show');
    Route::delete('{id}', 'UserController@destroy');
    Route::resource('', 'UserController');
});

Route::group(['prefix' => 'role', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'RoleController@update');
    Route::get('{id}', 'RoleController@show');
    Route::delete('{id}', 'RoleController@destroy');
    Route::resource('', 'RoleController');
});

Route::middleware('auth:api')->get('my-reservations', 'ReservationController@browse_my_reservations');
Route::middleware('auth:api')->post('edit-my-reservation/{id}', 'ReservationController@edit_my_reservations');
Route::middleware('auth:api')->get('delete-my-reservation/{id}  ', 'ReservationController@delete_my_reservation');
Route::middleware('auth:api')->get('view-my-reservation/{id}', 'ReservationController@show_my_reservation');
Route::group(['prefix' => 'reservation', 'middleware' => 'auth:api'], function () {
    Route::get('/getallsatatus', 'ReservationController@getAllStatus');
    Route::post('{id}', 'ReservationController@update');
    Route::get('{id}', 'ReservationController@show');
    Route::get('get_reservation_dates/{id}', 'ReservationController@get_reservation_dates');
    Route::delete('{id}', 'ReservationController@destroy');
    Route::resource('', 'ReservationController');

});

Route::group(['prefix' => 'property', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'PropertyController@update');
    Route::get('{id}', 'PropertyController@show');
    Route::delete('{id}', 'PropertyController@destroy');
    Route::resource('', 'PropertyController');
});

Route::group(['prefix' => 'feedback', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'FeedbackController@update');
    Route::get('{id}', 'FeedbackController@show');
    Route::delete('{id}', 'FeedbackController@destroy');
    Route::resource('', 'FeedbackController');
});

Route::group(['prefix' => 'client', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'ClientController@update');
    Route::get('{id}', 'ClientController@show');
    Route::delete('{id}', 'ClientController@destroy');
    Route::resource('', 'ClientController');
});

Route::group(['prefix' => 'message', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'MessageController@update');
    Route::get('{id}', 'MessageController@show');
    Route::delete('{id}', 'MessageController@destroy');
    Route::resource('', 'MessageController');
});

Route::middleware('auth:api')->get('permission', 'PermissionController@index');
