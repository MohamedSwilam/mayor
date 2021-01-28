@extends('layouts.website')

@section('title') Home |   @endsection

@section('content')


    <!--================Home Banner Area =================-->
    <section class="home_banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="container">
                <div class="banner_content">
                    <h5>The joy of home owning</h5>
                    <h3>Find Your New Home</h3>
                    <a class="main_btn" href="#">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Welcome Area =================-->
    <section class="welcome_area p_120">
        <div class="container">
            <div class="row welcome_inner">
                <div class="col-lg-6">
                    <div class="welcome_img">
                        <img class="img-fluid" src="/images/website/welcome-1.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="welcome_text">
                        <h4>Welcome to Reham Refaat</h4>
                        <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="wel_item">
                                    <i class="lnr lnr-database"></i>
                                    <h4>$2.5M</h4>
                                    <p>Total Donation</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="wel_item">
                                    <i class="lnr lnr-book"></i>
                                    <h4>1465</h4>
                                    <p>Total Projects</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="wel_item">
                                    <i class="lnr lnr-users"></i>
                                    <h4>3965</h4>
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
                    <div class="col-lg-4" style=" margin-bottom: 20px; max-height:inherit">
                        <div class="properties_item">
                            <div class="pp_img" style="text-align: center;">
                                <img style="padding: 30px; height: 300px; max-width: 300px" class="img-fluid"  src="/storage/property/{{$property->main_home_image}}" alt="">
                            </div>
                            <div class="pp_content">
                                <a href="/properties/{{$property->id}}"><h4>{{$property->title}}</h4></a>
                                <p>{{$property->description}}</p>
                                <div class="tags">
                                    <a>{{$property->no_of_floors}} Floor(s)</a>
                                    <a>{{$property->no_of_rooms}} Room(s)</a>
                                    <a>{{$property->no_of_baths}} Bathroom(s)</a>
                                    <a>{{$property->sqm}} sqm</a>
                                    <a><i class=" fa @if($property->has_pool == 1 )fa-check @else fa-times @endif" aria-hidden="true"></i>Pool</a>
                                    <a><i class=" fa @if($property->has_garden == 1 )fa-check @else fa-times @endif" aria-hidden="true"></i>Graden</a>
                                </div>
                                <div class="pp_footer">
                                    <h5>{{$property->price}} EGP</h5>
                                    <a href="/properties/{{$property->id}}"class="main_btn" >For Rent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach


            </div>
        </div>
    </section>
    <!--================End Properties Area =================-->

    <!--================Testimonials Area =================-->
    <section class="feedbackcon">
        <div class="container">
            <div class="row testimonials_inner">
                <div class="col-lg-4">
                    <div class="testi_left_text">
                        <h4>Client’s Feedback</h4>
                        <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                    </div>
                </div>

                <div class="col-lg-8">

                    <div class="testi_slider owl-carousel">
                        @foreach($feedback as $feedback)
                        <div class="item">
                            <div class="testi_item">
{{--                                "--}}
                                <img  style="max-width: 150px; max-height: 150px; border-radius: 50%;" src="/storage/feedback/{{$feedback->image}}" alt="">
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
    <section class="feature_area p_120">
        <div class="container">
            <div class="main_title">
                <h2>What we Do</h2>
                <p>we have this services</p>
            </div>
            <div class="row feature_inner">

                @foreach($services as $service)
                    <div class="col-lg-4 col-sm-6">
                        <div class="feature_item">
                            <h4>{{$service->service}}</h4>
                            <p>{{$service->description}}</p>
                        </div>
                    </div>
                @endforeach


            </div>
        </div>
    </section>

@endsection
