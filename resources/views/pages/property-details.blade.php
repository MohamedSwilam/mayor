@extends('layouts.website')

@section('title') Property Details |   @endsection

@section('content')
    <!--================Home Banner Area =================-->
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0"
                 data-background=""></div>
            <div class="container">
                <div class="banner_content">
                    <div class="page_link">
                        <a href="/">Home</a>
                        <a href="/properties">Properties</a>
                        <a href="#">Property Details</a>
                    </div>
                    <h2>Property Details</h2>
                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Blog Area =================-->
    <section class="blog_area single-post-area p_120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 posts-list">
                    <div class="single-post row">
                        <div class="col-lg-12">
                            <div class="feature-img" style="text-align: center;">
                                <img style="max-height: 300px; width: 100%" class="img-fluid"
                                     src="/storage/property/{{$property->main_details_image}}" alt="">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 blog_details">
                            <h2>{{$property->title}}</h2>
                            <p class="excert">
                                {{$property->description}}
                            </p>
                            <p>
                                {{$property->information}}
                            </p>
                        </div>
                        <div class="col-lg-12 col-md-12 ">
                            <h3 class="title_color">Property Gallery</h3>
                            <div class="slideshow-container">
                                @if(count($property->images)> 0)
                                    @foreach($property->images as $counter=> $image )
                                        <div class="mySlides ">
                                            <div class="numbertext">{{$counter+1}} / {{count($property->images)}}</div>
                                            <div class="text">{{($image ?? '')->description}}</div>
                                            <img src="/storage/property/{{$image->source}}" style="width:100%">

                                        </div>
                                    @endforeach

                                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                    <a class="next" onclick="plusSlides(1)">&#10095;</a>

                            </div>
                            <br>
                            <div style="text-align: center;">
                                @foreach($property->images as $counter=> $image )
                                    <span class="dot" onclick="currentSlide({{$counter+1}})"></span>
                                @endforeach

                                @else
                                    <div class="col-md-12" style="text-align: center">
                                        <b>No images uploaded for this property!</b>
                                    </div>
                                @endif


                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                    <div class="reserve-form">
                        <h4>Property Reservation</h4>

                        <a href="\dashboard\reservation\{{$property->id}}\create" class="primary-btn submit_btn">Reserve
                            Now</a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">Property Features</h4>
                            <ul class="list cat-list">
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Area</p>
                                        <p>{{$property->sqm}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Floors</p>
                                        <p>{{$property->no_of_floors}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Rooms</p>
                                        <p>{{$property->no_of_rooms}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Bathrooms</p>
                                        <p>{{$property->no_of_baths}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Garden?</p>
                                        <p>{{$property->has_garden==1?'Yes':'No'}}</p>
                                    </a>
                                </li>

                                <li>
                                    <a class="d-flex justify-content-between">
                                    <p>Has TV?</p>
                                        <p>{{$property->has_tv==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has DVD?</p>
                                        <p>{{$property->has_dvd==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Music Player?</p>
                                        <p>{{$property->has_music_player==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Wifi Internet?</p>
                                        <p>{{$property->has_wifi_internet==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Washing Machine ?</p>
                                        <p>{{$property->has_washing_machine==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Full Kitchen ?</p>
                                        <p>{{$property->has_full_kitchen==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Washing Machine ?</p>
                                        <p>{{$property->has_washing_machine==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Air Condition ?</p>
                                        <p>{{$property->has_air_condition==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Car Parking ?</p>
                                        <p>{{$property->has_car_parking==1?'Yes':'No'}}</p>
                                    </a>
                                </li>

                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Pool?</p>
                                        <p>{{$property->has_pool==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Has Garden?</p>
                                        <p>{{$property->has_garden==1?'Yes':'No'}}</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Price</p>
                                        <p>{{$property->price}} EGP</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Dinner Price</p>
                                        <p>{{$property->dinner_price}} EGP</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Lunch Price</p>
                                        <p>{{$property->lunch_price}} EGP</p>
                                    </a>
                                </li>
                            </ul>
                            <div class="br"></div>
                        </aside>
                        <aside class="single-sidebar-widget tag_cloud_widget">
                            <h4 class="widget_title">Location</h4>
                            <p>
                                {{$property->address}}
                            </p>
                            <p>
                                {{$property->address_desc}}
                            </p>
                            <div style="text-align: center;">
                                <a href="{{$property->location}}" target="_blank" class="primary-btn submit_btn">View
                                    On
                                    Map</a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
        <h2>Recommended Properties</h2>
        <br>
        <br>
        <div class="row">

            @foreach($recomnds as $recomnded)
                <div class="col-lg-4">
                    <div class="categories_post">
                        {{--                            <img src="/storage/feedback/67b748722515dac2848d9c9b6ee7b19e.jpeg" alt="post">--}}
                        <img src="/storage/property/{{$recomnded->main_details_image}}" alt="post">
                        <div class="categories_details">
                            <div class="categories_text">
                                <a href="/properties/{{$recomnded->id}}/{{$recomnded->property_type_id}}">
                                    <h5>{{$recomnded->title}}</h5></a>
                                <div class="border_line"></div>
                                <p>{{$recomnded->description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

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
            display: none
        }

        img {
            vertical-align: middle;
            border-radius: 15px;
        }

        /* Slideshow container */
        .slideshow-container {
            max-width: 1000px;
            position: relative;
            margin: auto;

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
            color: #f2f2f2;
            font-size: 15px;
            padding: 8px 12px;
            position: absolute;
            bottom: 8px;
            width: 100%;
            text-align: center;
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
