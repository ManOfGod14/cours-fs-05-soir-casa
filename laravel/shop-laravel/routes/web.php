<?php

use App\Http\Controllers\Auth\AuthUserController;
use App\Http\Controllers\Auth\UserProfileController;
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

Route::group(['prefix' => 'auth'], function ($route) {
    // $route->get('/login', 'Auth\AuthUserController@loginForm')->name('front.auth.login.form');
    // $route->get('/save-login', 'Auth\AuthUserController@saveLogin')->name('front.auth.login.save');
    $route->get('/login', [AuthUserController::class, 'loginForm'])->name('front.auth.login.form');
    $route->post('/save-login', [AuthUserController::class, 'saveLogin'])->name('front.auth.login.save');

    $route->get('/signup', [AuthUserController::class, 'signupForm'])->name('front.auth.signup.form');
    $route->post('/registration', [AuthUserController::class, 'registration'])->name('front.auth.registration');

    $route->get('/logout', [AuthUserController::class, 'logout'])->name('front.auth.logout');
});

Route::group(['prefix' => 'front-user', 'middleware' => 'auth:web'], function ($route) {
    $route->get('profile', [UserProfileController::class, 'profile'])->name('front.user.profile');
    $route->put('edit-profile', [UserProfileController::class, 'editProfile'])->name('front.user.edit.profile');
    $route->put('edit-password', [UserProfileController::class, 'editPassword'])->name('front.user.edit.password');
});

Route::get('api', function() {
    return redirect("api/incomplete-url");
});

