@extends('front.layouts.master')

@section('title', "Contactez-nous")

@section('custom_css')
{{--  les fichiers css personnalisés --}}
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

<div class="">
    <form action="{{ route('front.contact.save') }}" method="post">
    </form>
</div>

@endsection

@section('custom_js')
{{--  les fichiers js personnalisés --}}
@endsection

