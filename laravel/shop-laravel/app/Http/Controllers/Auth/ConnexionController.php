<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConnexionController extends Controller
{
    
    /**
     * focntion d'affichage de la page de connexion
     */
    public function loginForm() {
        return view("front/pages/signin");
    }

    /**
     * fonction vérifier l'authentication
     */
    public function saveLogin() {
        
    }
}
