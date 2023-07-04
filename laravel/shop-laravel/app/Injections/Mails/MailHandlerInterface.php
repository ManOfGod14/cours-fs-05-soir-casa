<?php

namespace App\Injections\Mails;

interface MailHandlerInterface {
    public function sendContactFormMail($to, $dataMail);

    // public function sendConfirmationMail($to, $dataMail);
}