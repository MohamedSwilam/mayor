@extends('layouts.website')

@section('title') Home |   @endsection

@section('content')


    <!--================Home Banner Area =================-->
    <section class="home_banner_area">
        <div class="slideshow-container">
            @foreach($homeDataImages as $counter=> $image )

                <div class="mySlides ">

                    <div class="numbertext">{{$counter+1}} / {{count($homeDataImages)}}</div>

                    <dev class="text">{{($image ?? '')->description}}</dev>

                        <img class="slider-img" src="{{$image->source}}">

                </div>
            @endforeach

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>

        </div>
        {{--                <div class="banner_content">--}}
        {{--                    <h5>The joy of home owning</h5>--}}
        {{--                    <h3>Find Your New Home</h3>--}}
        {{--                    <a class="main_btn" href="#">Learn More</a>--}}
        {{--                </div>--}}
    </section>
    <!--================End Home Banner Area =================-->
    <!--================Welcome Area =================-->
    <section class="welcome_area p_120">
        <div class="container">
            <div class="row welcome_inner">
                <div class="col-lg-6">
                    <div class="welcome_img">
                        <img class="img-fluid" src="{{$homeData[0]->welcome_image}}" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="welcome_text">
                        <h4>{{$homeData[0]->welcome_title}}  </h4>
                        <p>{{$homeData[0]->welcome_p}}</p>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="wel_item">
                                    <i class="lnr lnr-layers"></i>
                                    <h4>{{$homeData[0]->total_donation}}</h4>
                                    <p>Total Donation</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="wel_item">
                                    <i class="lnr lnr-apartment"></i>
                                    <h4>{{$homeData[0]->total_properties}}</h4>
                                    <p>Total Projects</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="wel_item">
                                    <i class="lnr lnr-users"></i>
                                    <h4>{{$homeData[0]->total_volunteers}}</h4>
                                    <p>Total Volunteers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End Welcome Area =================-->

    <!--================Properties Area =================-->
    <section class="properties_area">
        <div class="container">
            <div class="main_title">
                <h2>Our Top Rated Properties</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div class="row properties_inner">

                @foreach($properties as $property)
                    <div class="col-lg-4" style=" margin-bottom: 20px; ">
                        <div class="properties_item">
                            <div class="pp_img" style="text-align: center;">
                                <img style="height: auto; border-top-left-radius: 15px; border-top-right-radius: 15px; width: -webkit-fill-available;"
                                     class="img-fluid" src="/storage/property/{{$property->main_home_image}}" alt="">
                            </div>
                            <div class="pp_content">
                                <a href="/properties/{{$property->id}}"><h4>{{$property->title}}</h4></a>
                                <p>{{$property->description}}</p>
                                <div class="tags">
                                    <a>{{$property->no_of_floors}} Floor(s)</a>
                                    <a>{{$property->no_of_rooms}} Room(s)</a>
                                    <a>{{$property->no_of_baths}} Bathroom(s)</a>
                                    <a>{{$property->sqm}} sqm</a>
                                    <a><i class=" fa @if($property->has_pool == 1 )fa-check @else fa-times @endif"
                                          aria-hidden="true"></i>Pool</a>
                                    <a><i class=" fa @if($property->has_garden == 1 )fa-check @else fa-times @endif"
                                          aria-hidden="true"></i>Graden</a>
                                </div>
                                <div class="pp_footer">
                                    <h5>{{$property->price}} EGP</h5>
                                    <a href="/properties/{{$property->id}}" class="main_btn">For Rent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach


            </div>
        </div>
    </section>
    <!--================End Properties Area =================-->
    <section class="feature_area p_120">
        <div class="container">
            <div class="main_title">
                <h2>What we Do</h2>
                <p>we have this services</p>
            </div>
            <section class="blog_categorie_area">
                <div class="container">
                    <div class="row">
                        @foreach($services as $service)
                            <div class="col-lg-4">
                                <div class="categories_post">
                                    {{--                            <img src="/storage/feedback/67b748722515dac2848d9c9b6ee7b19e.jpeg" alt="post">--}}
                                    <img src="/storage/feedback/{{$service->icon}}" alt="post">
                                    <div class="categories_details">
                                        <div class="categories_text">
                                            <a href="/services"><h5>{{$service->service}}</h5></a>
                                            <div class="border_line"></div>
                                            <p>{{$service->description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        </div>
    </section>

    <!--================Testimonials Area =================-->
    <section class="feedbackcon">
        <div class="container">
            <div class="row testimonials_inner">
                <div class="col-lg-4">
                    <div class="testi_left_text">
                        <h4>Client’s Feedback</h4>
                        <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct
                            standards especially in the workplace. That’s why it’s crucial that, as women, our behavior
                            on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                    </div>
                </div>

                <div class="col-lg-8">

                    <div class="testi_slider owl-carousel">
                        @foreach($feedback as $feedback)
                            <div class="item">
                                <div class="testi_item">
                                    {{--                                "--}}
                                    <img style="max-width: 150px; max-height: 150px; border-radius: 50%;"
                                         src="/storage/feedback/{{$feedback->image}}" alt="">
                                    <p style="height: 100px;">{{$feedback->feedback}}</p>
                                    <h4>{{$feedback->name}}</h4>
                                    <h6>{{$feedback->title}}</h6>
                                </div>
                            </div>
                        @endforeach
                    </div>

                </div>
            </div>
        </div>
    </section>
    <br>
    <br>
    <!--================End Testimonials Area =================-->


    <script>
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active1", "");
            }
            slides[slideIndex - 1].style.width = "inherit"
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += "active1";
        }
    </script>

    <!--================Blog Area =================-->
    <style>

        .slider-i {
            position: relative;
            display: block;
            width: 100%;
            height: 300px;
            overflow: hidden;
            border-radius: 5px;
        }

        .slider-i:before, .slider-i:after {
            content: '<';
            position: absolute;
            top: 50%;
            left: 1rem;
            z-index: 2;
            width: 2rem;
            height: 2rem;
            background: #5f3f3f;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
        }

        .slider-i:after {
            content: '>';
            left: auto;
            right: 1rem;
        }

        /* I haven't found a way for IE and Edge to let me style inputs that way */
        .slider-i input {
            appearance: none;
            -ms-appearance: none;
            -webkit-appearance: none;
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 5px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            transform: translateX(100%);
            transition: transform ease-in-out 400ms;
            z-index: 1;
        }

        .slider-i input:focus {
            outline: none;
        }

        .slider-img {
            height: 730px;
            max-height: 730px;
            width: 100%;
            object-fit: fill;
        }

        .slider-i input:after {
            content: attr(title);
            position: absolute;
            top: 1rem;
            left: 1rem;
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
            padding: .5rem;
            font-size: 1rem;
            border-radius: 5px;
        }

        .slider-i input:not(checked):before {
            content: '';
            position: absolute;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            top: 50%;
            left: calc(-100% + 1rem);
        }

        .slider-i input:checked:before {
            display: none;
            left: 1rem;
        }

        .slider-i input:checked {
            transform: translateX(0);
            pointer-event: none;
            z-index: 0;
            box-shadow: -5px 10px 20px -15px rgba(0, 0, 0, 1);
        }

        input:checked + input:before {
            left: -3rem;
        }

        input:checked + input ~ input:before {
            display: none;
        }
    </style>

    <style>
        * {
            box-sizing: border-box
        }

        body {
            font-family: Verdana, sans-serif;
            margin: 0
        }

        .mySlides {
            width: inherit;
            display: none

        }


        /* Slideshow container */
        .slideshow-container {
            width: fit-content;
            position: relative;
            margin: 10px;
            width: inherit;
        }

        /* Next & previous buttons */
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }

        /* Position the "next button" to the right */
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }

        /* On hover, add a black background color with a little bit see-through */
        .prev:hover, .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        /* Caption text */
        .text {
            color: rgb(158, 110, 74);
            font-size: 30px;
            padding: 8px 12px;
            position: absolute;
            bottom: 100px;
            left: 50px;
            width: 100%;
        }

        /* Number text (1/3 etc) */
        .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
        }

        /* The dots/bullets/indicators */
        .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }

        .active1, .dot:hover {
            background-color: #717171;
        }

        /* Fading animation */
        .fade {
            -webkit-animation-name: fade;
            -webkit-animation-duration: 1.5s;
            animation-name: fade;
            animation-duration: 1.5s;
        }

        @-webkit-keyframes fade {
            from {
                opacity: .4
            }
            to {
                opacity: 1
            }
        }

        @keyframes fade {
            from {
                opacity: .4
            }
            to {
                opacity: 1
            }
        }

        /* On smaller screens, decrease text size */
        @media only screen and (max-width: 300px) {
            .prev, .next, .text {
                font-size: 11px
            }
        }
    </style>
@endsection
