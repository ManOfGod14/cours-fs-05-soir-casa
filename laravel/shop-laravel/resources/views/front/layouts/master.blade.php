<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>@yield('title', "Master Page")</title>

    <!-- favicon-->
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/images/favicon.ico') }}" />
    
    <!-- css -->
    <link rel="stylesheet" href="{{ asset('assets/bootstrap.min.css') }}">

    <!-- bootstrap icons-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
    
    {{-- fichier css spécifique a chaque page --}}
    @yield('custom_css')
</head>
<body>
    {{-- heder section --}}
    @include('front.layouts.header')

    @yield('content')

    {{-- footer section --}}
    @include('front.layouts.footer')

    <!-- script js -->
    <script src="{{ asset('assets/bootstrap.bundle.js') }}"></script>

    {{-- fichier js spécifique a chaque page --}}
    @yield('custom_js')
</body>
</html>