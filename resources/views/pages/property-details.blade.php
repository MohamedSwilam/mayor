@extends('layouts.website')

@section('title') Property Details |   @endsection

@section('content')
    <!--================Home Banner Area =================-->
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
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
                                <img style="max-height: 300px;" class="img-fluid" src="{{$property->main_details_image}}" alt="">
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
                                @foreach($property->images as $image )
                                    <div class="col-md-4">
                                        <a href="/storage/properties/{{$image->source}}" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/storage/properties/{{$image ?? ''->source}});"></div></a>
                                    </div>
                                @endforeach

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

                        <a href="\dashboard" class="primary-btn submit_btn">Reserve Now</a>
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
                                <a href="{{$property->location}}" target="_blank" class="primary-btn submit_btn">View On Map</a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================Blog Area =================-->
@endsection
