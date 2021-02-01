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
            <div class="container">
                <div class="main_title">
                    <h2>What we Do</h2>
                    <p>we have this services</p>
                </div>
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
            </div>

            <br>
            <br>
            <div class="col-lg-9">
                <h2>Request a service</h2>
                <form class="row contact_form" action="{{url('create-message')}}" method="post" id="contactForm"
                      novalidate="novalidate">
                    {{ csrf_field() }}

                        <div class="col-md-6">
                            <div class="form-group">
                                    <select name="service" id="cars" class="custom-select form-select">
                                        @foreach($services as $service)
                                           <option value="{{$service->id}}">{{$service->service}}</option>
                                        @endforeach
                                    </select>

                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" name="email"
                                       placeholder="Enter email address">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" name="phone"
                                       placeholder="Enter phone">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea class="form-control" name="message" id="message" rows="1"
                                          placeholder="Enter Message"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12 text-right">
                            <input type="submit" value="Send" class="btn submit_btn"> </input>
                        </div>
                </form>
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>

                @endif
            </div>
        </div>
    </section>
    <!--================End Feature Area =================-->
    <br>
    <br>
    <!--================Testimonials Area =================-->
    <!--================End Testimonials Area =================-->


@endsection
