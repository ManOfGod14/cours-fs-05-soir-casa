<?php

namespace App\Http\Controllers;

use App\Injections\Mails\MailHandlerInterface;
use App\Models\ContactForm;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactFormController extends Controller
{
    // affichage du formulaire de contact
    public function showForm()
    {
        $countries = Country::orderBy('name', 'ASC')->get();
        return view('front/pages/contact-form', compact(
            'countries'
        ));
    }

    public function saveForm(Request $request, MailHandlerInterface $mail_handler)
    {
        $rules = [
            "last_name" => "required|string|max:255",
            "first_name" => "required|string|max:255",
            "email" => "required|string|email|max:255",
            "country_id" => "required",
            "phone_number" => "required|min:7|max:20",
            "object" => "required|string|max:255",
            "message_content" => "required|string",
            "g-recaptcha-response" => "required|recaptcha",
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()) {
            return redirect(route('front.contact.form'))->withInput()->withErrors($validator);
        } else {
            $data_request = $request->all();
            unset($data_request["g-recaptcha-response"]);
            // dd($data_request);

            $contact_form = ContactForm::create($data_request);
            if($contact_form->id) {
                $mail_user = $mail_handler->sendContactFormMail('user', $data_request);
                if($mail_user) {
                    return redirect(route('front.contact.form'))->with('success_msg', "Votre de demande a été bien envoyé !");
                } else {
                    return redirect(route('front.contact.form'))->with('error_msg', "Nous n'avons pu vous envoyer un email !");
                }
            } else {
                return redirect(route('front.contact.form'))->with('error_msg', "Echec d'envoi de demande !");
            }
        }
    }
}
