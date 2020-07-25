<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'Web\PagesController@home')->name('home');

Route::get('/properties', 'Web\PagesController@properties')->name('properties');
Route::get('/properties/{id}', 'Web\PagesController@property')->name('properties-details');
Route::view('/contact-us', 'pages.contact')->name('contact');
Route::post('/create-message', 'Web\PagesController@contact_us');
Route::get('/about', 'Web\PagesController@about')->name('about');
Route::view('/thanks', 'pages.thanks')->name('thanks');
Route::get('/dashboard', 'ApplicationController')->where('any', '.*');
Route::get('/dashboard/{any}', 'ApplicationController')->where('any', '.*');
