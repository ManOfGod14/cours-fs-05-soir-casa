<?php

namespace App\Injections\Mails;

use App\Injections\Mails\MailHandlerInterface;
use Illuminate\Support\Facades\Mail;

class MailHandler implements MailHandlerInterface {
    public function sendContactFormMail($to, $dataMail) {
        $data = $dataMail;

        try {
            Mail::send('mail_templates.contact_mail', $data, function($message) use ($data) {
                $message->to($data['email'], $data['first_name'].' '.$data['last_name']);
                $message->subject($data['object']);
                $message->from(env('MAIL_USERNAME'), "CONTACT FORM");
            });
            return true;
        } catch (\Exception $e) {
            // return $e->getMessage();
            return false;
        }
    }
}