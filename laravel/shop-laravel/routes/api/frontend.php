<?php

use App\Http\Controllers\Auth\ApiAuthUserController;

$route->group(['middleware' => 'auth:sanctum'], function ($route) {
    $route->post('auth-logout', [ApiAuthUserController::class, 'authLogout']);
});