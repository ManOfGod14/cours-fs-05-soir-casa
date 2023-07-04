<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;

class ApiFrontHelper {
    // récupérer la guard des api front
    public static function fnGuard() {
        return Auth::guard();
    }

    // vérifier les identifiants de l'utilisateur
    public static function fnAttempt($credentials) {
        return Auth::guard()->attempt($credentials);
    }

    // fonction de connexion
    public static function fnLogin($userData) {
        return Auth::guard()->login($userData);
    }

    // fonction de déconnexion
    public static function fnLogout() {
        return Auth::guard()->logout();
    }

    // current user data
    public static function currentUser($key = 'all') {
        if($key === 'all') {
            return Auth::guard()->user();
        } else {
            return Auth::guard()->user()->$key;
        }
    }

    // user token access data
    public static function getUserTokenData() {
        return [
            'id' => self::currentUser('id'),
            'name' => self::currentUser('name'),
            'email' => self::currentUser('email')
        ];
    }
}