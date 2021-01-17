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
                        <a href="index.html">Home</a>
                        <a href="blog.html">Properties</a>
                        <a href="single-blog.html">Property Details</a>
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
                                <img style="max-height: 300px; max-width: 400px;" class="img-fluid"
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

                            <div>
                                    <div class="slideshow-container">
                                    @foreach($property->images as$index => $image )


                                        <!-- Full-width images with number and caption text -->
                                            <div class="mySlides fade">
                                                <div class="numbertext">{{$index}}/ {{count($property->images)}}</div>
                                                <img src="/storage/property/{{$image->source}}" >
                                                <div class="text">$image->source</div>
                                            </div>
                                    @endforeach
                                    <!-- Next and previous buttons -->
                                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                                    </div>
                                    <br>

                                    <!-- The dots/circles -->
                                    <div style="text-align:center">
                                        @foreach($property->images as$index => $image )
                                        <span class="dot" onclick="currentSlide({{$index}})"></span>
                                        @endforeach
                                    </div>



                                @if(count($property->images) == 0)
                                    <div class="col-md-12" style="text-align: center">
                                        <b>No images uploaded for this property!</b>
                                    </div>
                                @endif

                        </div>
                        </div>

                    </div>
                    {{--                    <script>--}}
                    {{--                        console.log(localStorage);--}}
                    {{--                        if (JSON.parse(localStorage.vuex)) {--}}

                    {{--                        }--}}
                    {{--                    </script>--}}
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
                                        <p>Has Pool?</p>
                                        <p>{{$property->has_pool==1?'Yes':'No'}}</p>
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
                                <a href="{{$property->location}}" target="_blank" class="primary-btn submit_btn">View On
                                    Map</a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================Blog Area =================-->
    <script>
        var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        // Thumbnail image controls
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
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    </script>
    <style>
        * {
            box-sizing: border-box
        }

        /* Slideshow container */
        .slideshow-container {
            max-width: 1000px;
            position: relative;
            margin: auto;
        }

        /* Hide the images by default */
        .mySlides {
            display: none;
        }

        /* Next & previous buttons */
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            margin-top: -22px;
            padding: 16px;
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

        .active, .dot:hover {
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
    </style>
@endsection

