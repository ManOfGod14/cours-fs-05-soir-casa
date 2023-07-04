@extends('front.layouts.master')

@section('title', "Inscription")

@section('custom_css')
{{--  les fichiers css personnalisés --}}

{!! ReCaptcha::htmlScriptTagJsApi() !!}
@endsection

@section('content')
<!-- start headerv-->
<header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Inscription</h1>
            <p class="lead fw-normal text-white-50 mb-0">Création de compte utilisateur</p>
        </div>
    </div>
</header>
<!-- end headerv-->

<div class="container py-3">
    <h1 class="text-center">Formulaire d'inscription</h1>
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

    <form action="{{ route('front.auth.registration') }}" method="post">
        @csrf
        <div class="row">
            <div class="form-group col-md-12 mb-3">
                <label for="name">
                    Full name <span class="text-danger">*</span>
                </label>
                <input type="text" name="name" class="form-control" required>
            </div>

            <div class="form-group col-md-12 mb-3">
                <label for="email">
                    Email <span class="text-danger">*</span>
                </label>
                <input type="email" name="email" class="form-control" required>
            </div>

            <div class="form-group col-md-12 mb-3">
                <label for="password">
                    Password <span class="text-danger">*</span>
                </label>
                <input type="password" name="password" id="password" class="form-control" required>
            </div>

            <div class="form-group col-md-12 mb-3">
                <label for="password_confirmation">
                    Confirm Password <span class="text-danger">*</span>
                </label>
                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" required>
                <div class="py-1">
                    <span id="pwd_message"></span>
                </div>
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
                    Enregistrer
                </button>
            </div>
        </div>
    </form>
</div>
@endsection

@section('custom_js')
{{--  les fichiers js personnalisés --}}
<script src="{{ asset('assets/jquery-3.6.4.min.js') }}"></script>
<script>
    $('#password, #password_confirmation').on('keyup', function() {
        if($('#password').val() == $('#password_confirmation').val()) {
            $('#pwd_message').html('Les mots de passe correspondent !').css('color', 'green');
        } else {
            $('#pwd_message').html('Les mots de passe ne correspondent pas !').css('color', 'red');
        }
    });
</script>
@endsection
