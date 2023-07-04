<?php

use App\Http\Controllers\Auth\ApiAuthUserController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => '/'], function($route) {
    // frontend api
    $route->group(['prefix' => 'front'], function($route) {
        $route->post('auth-login', [ApiAuthUserController::class, 'authLogin']);

        // les routes protégées
        require_once __DIR__ . '/api/frontend.php';
    });

    // backend api
    $route->group(['prefix' => 'back'], function($route) {
        $route->get('/', function() {
            return response()->json([
                'type' => 'success',
                'message' => 'Mes api backend',
                'result' => null,
            ]);
        });
    });

    // info php
    // echo phpinfo();
    $route->get('php-info', function() {
        echo phpinfo();
    });

    // route incomplete
    $route->get('incomplete-url', function(Request $request) {
        return response()->json([
            'type' => 'error',
            'message' => 'Oops! URL Incomplet',
            'path' => $request->path(),
            'result' => null,
        ]);
    });

    // route introuvable
    $route->fallback(function(Request $request) {
        return response()->json([
            'type' => 'error',
            'message' => 'Oops! Route introuvable',
            'path' => $request->path(),
            'result' => null,
        ]);
    });
});
