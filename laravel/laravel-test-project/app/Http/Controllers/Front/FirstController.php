<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FirstController extends Controller
{
    public $users = array(
        'Maliki', 
        'Mohcine', 
        'Nabil', 
        'Younes'
    );

    public function __construct()
    {
        
    }

    public function home() {
        // dd($this->users);
        return view('front/home')->with([
            'users' => $this->users
        ]);
    }
}
