<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class AuthUserController extends Controller
{
    /**
     * focntion d'affichage de la page de connexion
     */
    public function loginForm() {
        if(Auth::guard('web')->user()) {
            return redirect(route('front.user.profile'));
        } else {
            return view("front/pages/signin");
        }
    }

    /**
     * fonction vérifier l'authentication
     */
    public function saveLogin(Request $request) {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required',
            "g-recaptcha-response" => "required|recaptcha",
        ]);
        
        $credentials = $request->only('email', 'password');
        if(Auth::guard()->attempt($credentials)) {
            return redirect(route('front.user.profile'));
        } else {
            // return redirect(route('front.auth.login.form'))->with('error_msg', "Echec d'authentification, email ou mot de passe incorrecte !");
            return back()->with('error_msg', "Echec d'authentification, email ou mot de passe incorrecte !");
        }
    }

    /**
     * fonction pour afficher la page de d'inscription
     */
    public function signupForm() {
        if(Auth::guard('web')->user()) {
            return redirect(route('front.user.profile'));
        } else {
            return view("front/pages/signup");
        }
    }

    /**
     * fonction pour enregistrer l'inscription
     */
    public function registration(Request $request) 
    {
        $rules = [
            "name" => "required|string|max:255",
            "email" => "required|string|email|max:255",
            "password" => "required|string|confirmed|min:6|max:25",
            "g-recaptcha-response" => "required|recaptcha",
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return redirect(route('front.auth.signup.form'))->withInput()->withErrors($validator);
        } else {
            $data_request = $request->all();
            $data_request['password'] = bcrypt($data_request['password']);

            unset($data_request["password_confirmation"]);
            unset($data_request["g-recaptcha-response"]);

            // dd($data_request);

            $user = User::create($data_request);
            if($user->id) {
                return redirect(route('front.auth.signup.form'))->with('success_msg', "Votre compte a été créé avec succès !");
            } else {
                return redirect(route('front.auth.signup.form'))->with('error_msg', "Echec de création de compte !");
            }
        }
    }

    public function logout() {
        Session::flush();
        Auth::guard('web')->logout();

        return redirect(route('front.auth.login.form'));
    }
}
