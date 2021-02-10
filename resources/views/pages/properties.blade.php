@extends('layouts.website')

@section('title') Properties |   @endsection

@section('content')
    <!--================Home Banner Area =================-->
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="banner_content">
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="properties.html">Properties</a>
                    </div>
                    <h2>Properties</h2>
                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Properties Area =================-->
    <section class="properties_area pad_top">
        <div class="container">
            <div class="main_title">
                <h2>Our Top Rated Properties</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
            </div>
            <div class="row properties_inner" >
                @foreach($properties as $property)
                    <div class="col-lg-4" style="margin-bottom: 20px; max-height:inherit">
                        <div class="properties_item">
                            <div class="pp_img" >
                                <img  style="max-height: 250px; width: 100%; border-top-right-radius: 15px;border-top-left-radius: 15px" class="img-fluid"  src="/storage/property/{{$property->main_home_image}}" alt="">
                            </div>
                            <div class="pp_content">
                                <a href="/properties/{{$property->id}}" ><h4>{{$property->title}}</h4></a>
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
                                    <a href="/properties/{{$property->id}}/{{$property->property_type_id}}"class="main_btn" >For Rent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!--================End Properties Area =================-->

@endsection
