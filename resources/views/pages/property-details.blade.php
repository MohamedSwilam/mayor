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
                            <div class="row gallery-item">
                                @if(count($property->images) == 0)
                                    <div class="col-md-12" style="text-align: center">
                                        <b>No images uploaded for this property!</b>
                                    </div>
                                @else
                                    <div class="col-lg-12 col-md-12 " style="margin: auto; padding: 22px ">
                                        <i class="slider-i ">
                                            @foreach($property->images as $counter=> $image )
                                                @if($counter == 0)
                                                    <input class="col-lg-12 col-md-12 " checked type="radio" name="s"
                                                           style="background-image: url('/storage/property/{{$image->source}}');"
                                                           title="{{($image ?? '')->description}}">
                                                @else
                                                    <input class="col-lg-12 col-md-12 " type="radio" name="s"
                                                           style="background-image: url('/storage/property/{{$image->source}}');"
                                                           title="{{$image->description}}">
                                                @endif
                                            @endforeach

                                        </i>
                                    </div>
                                @endif


                            </div>
                        </div>
                    </div>


                    <div class="reserve-form" >
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
@endsection
