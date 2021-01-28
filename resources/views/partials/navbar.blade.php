<!--================Header Menu Area =================-->
<header class="header_area">
    <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container box_1620">
                <!-- Brand and toggle get grouped for better mobile display -->
                <a class="navbar-brand logo_h" href="{{route('home')}}"><img style="max-width: 160px;" src="/images/website/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item {{Request::is('/')?'active':''}}"><a class="nav-link" href="{{route('home')}}">Home</a></li>
                        <li class="nav-item {{Request::is('about')?'active':''}}"><a class="nav-link" href="{{route('about')}}">About</a></li>
                        <li class="nav-item {{Request::is('properties')||Request::is('properties/*')?'active':''}}"><a class="nav-link" href="{{route('properties')}}">Properties</a></li>
                        <li class="nav-item {{Request::is('services')||Request::is('services/*')?'active':''}}"><a class="nav-link" href="{{route('services')}}">Services</a></li>
                        <li class="nav-item {{Request::is('contact-us')?'active':''}}"><a class="nav-link" href="{{route('contact')}}">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
<!--================Header Menu Area =================-->
