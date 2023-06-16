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

// Route::get('/', function () {
//     return view('welcome');
// });

// home page location
Route::get('/', 'ProductController@index')->name('front.racine');
Route::get('home', 'ProductController@index')->name('front.home');

// shop location
Route::group(['prefix' => 'shop'], function ($route) {
    $route->get('all-products', 'ProductController@shop')->name('front.shop.all.products');
    $route->get('popular-items', 'ProductController@shop')->name('front.shop.popular.items');
    Route::get('new-arrivals', 'ProductController@shop')->name('front.shop.new.arrivals');
});

// contact form location
Route::group(['prefix' => 'contact'], function ($route) {
    $route->get('/', 'ContactFormController@showForm')->name('front.contact.form');
    $route->post('save', 'ContactFormController@saveForm')->name('front.contact.save');
});