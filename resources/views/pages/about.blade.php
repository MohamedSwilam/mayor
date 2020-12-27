@extends('layouts.website')

@section('title') About Us |   @endsection

@section('content')
    <!--================Home Banner Area =================-->
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="banner_content">
                    <div class="page_link">
                        <a href="home.blade.php">Home</a>
                        <a href="about.blade.php">About</a>
                    </div>
                    <h2>About Us</h2>
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
                        <h4>Welcome to SEL Center</h4>
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

    <!--================Feature Area =================-->
    <section class="feature_area p_120">
        <div class="container">
            <div class="main_title">
                <h2>Why we are the best</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            </div>
            <div class="row feature_inner">
                <div class="col-lg-4 col-sm-6">
                    <div class="feature_item">
                        <h4><i class="lnr lnr-user"></i>Expert Technicians</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="feature_item">
                        <h4><i class="lnr lnr-license"></i>Professional Service</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="feature_item">
                        <h4><i class="lnr lnr-phone"></i>Great Support</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="feature_item">
                        <h4><i class="lnr lnr-rocket"></i>Technical Skills</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="feature_item">
                        <h4><i class="lnr lnr-diamond"></i>Highly Recomended</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="feature_item">
                        <h4><i class="lnr lnr-bubble"></i>Positive Reviews</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End Feature Area =================-->
<br>
<br>
    <!--================Testimonials Area =================-->
    <!--================End Testimonials Area =================-->


@endsection
