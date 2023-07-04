<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InscriptionController extends Controller
{
    /**
     * fonction pour afficher la page de d'inscription
     */
    public function signupForm() {
        return view("front/pages/signup");
    }

    /**
     * fonction pour enregistrer l'inscription
     */
    public function registration() {
        
    }
}
