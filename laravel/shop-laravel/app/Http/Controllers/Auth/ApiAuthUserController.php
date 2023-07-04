<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\ApiFrontHelper;
use App\Helpers\JsonHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ApiAuthUserController extends Controller
{
    // authentication de l'utilisateur
    public function authLogin(Request $request) {
        $rules = [
            'email' => 'required|email',
            'password' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return JsonHelper::jsonResponseError($validator->errors()->first());

            // return response()->json([
            //     'type' => 'error',
            //     'message' => $validator->errors()->first(),
            //     'result' => null,
            // ]);
        } else {
            $identifiants = $request->only('email', 'password');
            if(ApiFrontHelper::fnAttempt($identifiants)) {
                $user = ApiFrontHelper::currentUser();
                $token = $user->createToken('authToken')->plainTextToken;

                return self::repondWithToken($token);
            } else {
                return JsonHelper::jsonResponseError("Echec de connexion, email ou mot de passe incorrect !");

                // return response()->json([
                //     'type' => 'error',
                //     'message' => "Echec de connexion, email ou mot de passe incorrect !",
                //     'result' => null,
                // ]);
            }
        }
    }

    // déconnexion
    public function authLogout(Request $request) {
        if(ApiFrontHelper::fnGuard()->check()) {
            $request->user()->currentAccessToken()->delete();

            // ApiFrontHelper::fnLogout();
            return JsonHelper::jsonResponseSuccess(null, 'Déconnecté avec succès !');
        } else {
            return JsonHelper::jsonResponseError("Unauthorised, 401 (Token invalide) !");
        }
    }

    // reponse de connexion avec le token
    protected function repondWithToken($token) {
        return response()->json([
            'type' => 'success',
            'message' => "Authentifié avec succès !",
            'result' => [
                'token_type' => 'Bearer',
                'access_token' => $token,
                'authorization' => 'Bearer '.$token,
                'user' => ApiFrontHelper::getUserTokenData()
            ],
        ]);
    }
}
