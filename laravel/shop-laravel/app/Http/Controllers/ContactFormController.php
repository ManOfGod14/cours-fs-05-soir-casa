<?php

namespace App\Http\Controllers;

use App\Models\ContactForm;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    // affichage du formulaire de contact
    public function showForm()
    {
        return view('front/pages/contact-form');
    }

    public function saveForm(Request $request)
    {
        //
    }
}
