<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:web');
    }

    public function profile() {
        $profileData = Auth::guard('web')->user();
        
        // dd($profileData->name);

        return view('front/pages/profile', compact(
            'profileData'
        ));
    }

    public function editProfile(Request $request)
    {
        $rules = [
            "name" => "required|string|max:255",
            "email" => "required|string|email|max:255",
        ];

        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return redirect(route('front.user.profile'))->withInput()->withErrors($validator);
        } else {
            $data_request = $request->all();
            // dd($data_request);

            $userId = Auth::user()->id;
            $user = User::find($userId);
            if($user->update($data_request)) {
                return redirect(route('front.user.profile'))->with('success_msg', "Modification reussie !");
            } else {
                return redirect(route('front.user.profile'))->with('error_msg', "Echec de modification !");
            }
        }
    }

    public function editPassword(Request $request) {
        $rules = [
            "old_password" => "required",
            "password" => "required|string|confirmed|min:6|max:25",
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return redirect(route('front.user.profile'))->withInput()->withErrors($validator);
        } else {
            $data_request = $request->all();
            // $data_request['old_password'] = bcrypt($data_request['old_password']);
            // dd($data_request);

            $userId = Auth::user()->id;

            /**
             * 3 méthode pour récupérer une ligne d'une table
             */
            // la méthode find marche que avec la colonne id de table
            $user1 = User::find($userId); 

            // la méthode findOrFail marche que avec la colonne id de table
            $user2 = User::findOrFail($userId); 

            // avec where je dois préciser la colonne de la table qui m'interesse
            // $user = User::where('id', '=', $userId)->first();
            $user = User::where('id', $userId)->first();

            // je vérifie si l'ancien password est correct
            if(Hash::check($request->old_password, $user->password)) {
                unset($data_request['old_password']);
                unset($data_request['password_confirmation']);
                $data_request['password'] = bcrypt($data_request['password']);

                // dd($data_request);

                if($user->update($data_request)) {
                    return redirect(route('front.user.profile'))->with('success_msg', "Mot de passe chnagé avec succès !");
                } else {
                    return redirect(route('front.user.profile'))->with('error_msg', "Echec de changement de mot de passe !");
                }
            } else {
                return redirect(route('front.user.profile'))->with('error_msg', "L'ancien mot de passe n'est pas correct !");
            }
        }
    }
}
