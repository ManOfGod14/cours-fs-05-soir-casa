@extends('front.layouts.master')

@section('title', "Contactez-nous")

@section('custom_css')
{{--  les fichiers css personnalisés --}}

{!! ReCaptcha::htmlScriptTagJsApi() !!}
@endsection

@section('content')
<!-- start headerv-->
<header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Contactez-nous</h1>
            <p class="lead fw-normal text-white-50 mb-0">Pour tout vos besoins n'hésitez pas à nous contacter !</p>
        </div>
    </div>
</header>
<!-- end headerv-->

<div class="container py-3">
    <h1 class="text-center">Formulaire de contact</h1>
    <div>
        @if(count($errors) > 0)
        <div class="alert alert-danger" role="alert">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif

        {{-- envoyé de la demande --}}
        @if(session('success_msg'))
        <div class="alert alert-success" role="alert">
            {{ session('success_msg') }}
        </div>
        @elseif(session('error_msg'))
        <div class="alert alert-danger" role="alert">
            {{ session('error_msg') }}
        </div>
        @endif        
    </div>

    <form action="{{ route('front.contact.save') }}" method="post">
        @csrf
        <div class="row">
            <div class="form-group col-md-6 mb-3">
                <label for="last_name">
                    Votre nom de famille <span class="text-danger">*</span>
                </label>
                <input type="text" name="last_name" class="form-control" required>
            </div>
            <div class="form-group col-md-6 mb-3">
                <label for="first_name">
                    Votre prénom <span class="text-danger">*</span>
                </label>
                <input type="text" name="first_name" class="form-control" required>
            </div>
            <div class="form-group col-md-12 mb-3">
                <label for="email">
                    Votre adresse email <span class="text-danger">*</span>
                </label>
                <input type="email" name="email" class="form-control" required>
            </div>
            <div class="form-group col-md-6 mb-3">
                <label for="country_id">
                    Votre pays <span class="text-danger">*</span>
                </label>
                <select name="country_id" class="form-select" required>
                    <option value="">-- Sélectionnez le pays --</option>
                    @foreach ($countries as $key => $country)
                        <option value="{{ $country->id }}">{{ $country->name }}</option>
                    @endforeach
                  </select>
            </div>
            <div class="form-group col-md-6 mb-3">
                <label for="phone_number">
                    N° téléphone <span class="text-danger">*</span>
                </label>
                <input type="text" name="phone_number" class="form-control" required>
            </div>
            <div class="form-group col-md-12 mb-3">
                <label for="object">
                    Objet du message <span class="text-danger">*</span>
                </label>
                <input type="text" name="object" class="form-control" required>
            </div>
            <div class="form-group col-md-12 mb-3">
                <label for="message_content">
                    Votre message <span class="text-danger">*</span>
                </label>
                <textarea name="message_content" class="form-control" rows="5" required></textarea>
            </div>

            <div class="form-group col-md-6 mb-3">
                <div class="col-md-6">
                    <div class="mb-2">
                        {!! htmlFormSnippet() !!}
                    </div>
                </div>
            </div>

            <div class="form-group col-md-6 mb-3">
                <button type="submit" class="btn btn-primary w-100">
                    Envoyer votre message
                </button>
            </div>
        </div>
    </form>
</div>
@endsection

@section('custom_js')
{{--  les fichiers js personnalisés --}}
@endsection
