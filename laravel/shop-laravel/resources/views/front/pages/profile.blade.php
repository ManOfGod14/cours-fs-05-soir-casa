@extends('front.layouts.master')

@section('title', "Profil utilisateur")

@section('custom_css')
{{--  les fichiers css personnalisés --}}
@endsection

@section('content')
<!-- start headerv-->
<header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Bienvenu {{ Auth::guard('web')->user()->name }}</h1>
            <p class="lead fw-normal text-white-50 mb-0">Tableau de bord utilisateur</p>
        </div>
    </div>
</header>
<!-- end headerv-->

<div class="container py-3">
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

    <div class="row">
        <h3 class="text-center">
            Modification des informations de {{ $profileData->name }}
        </h3>
        <form action="{{ route('front.user.edit.profile') }}" method="post">
            @csrf
            {{ method_field('PUT') }}
            <div class="row">
                <div class="form-group col-md-6 mb-3">
                    <label for="name">
                        Full name <span class="text-danger">*</span>
                    </label>
                    <input type="text" name="name" id="name" value="{{ $profileData->name }}" class="form-control" disabled required>
                </div>
    
                <div class="form-group col-md-6 mb-3">
                    <label for="email">
                        Email <span class="text-danger">*</span>
                    </label>
                    <input type="email" name="email" id="email" value="{{ $profileData->email }}" class="form-control" disabled required>
                </div>
    
                <div class="form-group col-md-6 mb-3">
                    <input type="checkbox" id="showEdit" class="form-check-input">
                    <label for="showEdit" class="form-check-label">Modifier mes informations</label>
                </div>
    
                <div class="form-group col-md-12 mb-3" id="editBtn" style="display: none;">
                    <button type="submit" class="btn btn-primary w-100">
                        Enregistrer les modifications
                    </button>
                </div>
            </div>
        </form>
    </div>
    
    <hr />
    <div class="row">
        <h3 class="text-center">
            Changement de mot de passe
        </h3>
        <form action="{{ route('front.user.edit.password') }}" method="post">
            @csrf
            {{ method_field('PUT') }}
            <div class="row">
                <div class="form-group col-md-4 mb-3" id="div_old_password" style="display: none;">
                    <label for="old_password">
                        Old Password <span class="text-danger">*</span>
                    </label>
                    <input type="password" name="old_password" id="old_password" class="form-control" required>
                </div>

                <div class="form-group col-md-4 mb-3" id="div_password" style="display: none;">
                    <label for="password">
                        New Password <span class="text-danger">*</span>
                    </label>
                    <input type="password" name="password" id="password" class="form-control" required>
                </div>
    
                <div class="form-group col-md-4 mb-3" id="div_password_confirmation" style="display: none;">
                    <label for="password_confirmation">
                        Confirm New Password <span class="text-danger">*</span>
                    </label>
                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" required>
                    <div class="py-1">
                        <span id="pwd_message"></span>
                    </div>
                </div>
    
                <div class="form-group col-md-6 mb-3">
                    <input type="checkbox" id="showEditPass" class="form-check-input">
                    <label for="showEditPass" class="form-check-label">Changer mot de passe</label>
                </div>
    
                <div class="form-group col-md-12 mb-3" id="editPassBtn" style="display: none;">
                    <button type="submit" class="btn btn-primary w-100">
                        Enregistrer le mot de passe
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection

@section('custom_js')
{{--  les fichiers js personnalisés --}}

{{-- cacher/afficher les champs infors perso --}}
<script>
    let showEdit = document.querySelector('#showEdit');
    // console.log(showEdit.checked);
    showEdit.addEventListener('click', function() {
        // console.log(showEdit.checked)
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let editBtn = document.querySelector('#editBtn');

        if(showEdit.checked) {
            name.removeAttribute('disabled');
            email.removeAttribute('disabled');
            editBtn.removeAttribute('style');
        } else {
            name.setAttribute('disabled', '');
            email.setAttribute('disabled', '');
            editBtn.setAttribute('style', 'display: none');
        }
    });
</script>

{{-- script mot de passe : start --}}
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

{{-- cacher/afficher les champs mot de passe --}}
<script>
    let showEditPass = document.querySelector('#showEditPass');
    // console.log(showEditPass.checked);
    showEditPass.addEventListener('click', function() {
        // console.log(showEditPass.checked)
        let div_old_password = document.querySelector('#div_old_password');
        let div_password = document.querySelector('#div_password');
        let div_password_confirmation = document.querySelector('#div_password_confirmation');
        let editPassBtn = document.querySelector('#editPassBtn');

        if(showEditPass.checked) {
            div_old_password.removeAttribute('style');
            div_password.removeAttribute('style');
            div_password_confirmation.removeAttribute('style');
            editPassBtn.removeAttribute('style');
        } else {
            div_old_password.setAttribute('style', 'display: none');
            div_password.setAttribute('style', 'display: none');
            div_password_confirmation.setAttribute('style', 'display: none');
            editPassBtn.setAttribute('style', 'display: none');
        }
    });
</script>
{{-- script mot de passe : end  --}}
@endsection
