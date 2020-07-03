<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="shortcut icon" href="{{ asset('images/logo/logo-small.png') }}">
        <title>@yield('title') {{ config('app.name', 'Mayor') }}</title>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="{{ asset(mix('css/website/bootstrap.css'))}}">
        <link rel="stylesheet" href="{{ asset(mix('css/website/font-awesome.min.css'))}}">
        <link rel="stylesheet" href="{{ asset(mix('css/website/owl-carousel.min.css'))}}">
        <link rel="stylesheet" href="{{ asset(mix('css/website/simpleLightbox.css'))}}">
{{--        <link rel="stylesheet" href="{{ asset(mix('css/website/css/nice-select.css'))}}">--}}
        <link rel="stylesheet" href="{{ asset(mix('css/website/animate.css'))}}">
        <link rel="stylesheet" href="{{ asset(mix('css/website/jquery-ui.css'))}}">
        <!-- main css -->
        <link rel="stylesheet" href="{{ asset(mix('css/website/style.css'))}}">
        <link rel="stylesheet" href="{{ asset(mix('css/website/responsive.css'))}}">

    </head>
    <body>

        <div id="app">
            <!-- LOADER
            ====================================================== -->
{{--            @include('partials.loader')--}}

            <!-- HEADER NAVBAR
            ======================================================-->
            @include('partials.navbar')

            <!-- PAGE CONTENT
            ======================================================-->
            <div class="page-wrappers">

                @yield('content')

                <!-- FOOTER
                ======================================================-->
                @include('partials.footer')
            </div>
        </div>


        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="{{ asset(mix('js/website/jquery-3.2.1.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/popper.js'))}}"></script>
        <script src="{{ asset(mix('js/website/bootstrap.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/stellar.js'))}}"></script>
        <script src="{{ asset(mix('js/website/simpleLightbox.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/jquery.nice-select.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/imagesloaded.pkgd.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/isotope-min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/owl.carousel.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/jquery-ui.js'))}}"></script>
        <script src="{{ asset(mix('js/website/jquery.ajaxchimp.min.js'))}}"></script>
        <script src="{{ asset(mix('js/website/mail-script.js'))}}"></script>
        <script src="{{ asset(mix('js/website/theme.js'))}}"></script>

        @yield('extra-scripts')
    </body>
</html>
