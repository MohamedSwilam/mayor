@extends('layouts.website')

@section('title') About Us |   @endsection

@section('content')
    <!--================Home Banner Area =================-->
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0"
                 data-background=""></div>
            <div class="container">
                <div class="banner_content">
                    <div class="page_link">
                        <a href="home.blade.php">Home</a>
                        <a href="about.blade.php">services</a>
                    </div>
                    <h2>Services</h2>
                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Feature Area =================-->
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
    <!--================End Feature Area =================-->
    <br>
    <br>
    <!--================Testimonials Area =================-->
    <!--================End Testimonials Area =================-->


@endsection
