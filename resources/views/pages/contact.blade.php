@extends('layouts.website')

@section('title') Contact Us |   @endsection

@section('content')
    <!--================Home Banner Area =================-->
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
            <div class="container">
                <div class="banner_content">
                    <div class="page_link">
                        <a href="index.html">Home</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <h2>Contact Us</h2>
                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->

    <!--================Contact Area =================-->
    <section class="contact_area p_120">
        <div class="container">
            <div id="mapBox" class="mapBox"
                 data-lat="40.701083"
                 data-lon="-74.1522848"
                 data-zoom="13"
                 data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                 data-mlat="40.701083"
                 data-mlon="-74.1522848">
            </div>

{{--            ++++++++++++++++++++++ start form ++++++++++++++++++++++++++++--}}
            <div class="row">
                <div class="col-lg-3">
                    <div class="contact_info">
                        <div class="info_item">
                            <i class="lnr lnr-home"></i>
                            <h6>California, United States</h6>
                            <p>Santa monica bullevard</p>
                        </div>
                        <div class="info_item">
                            <i class="lnr lnr-phone-handset"></i>
                            <h6><a href="#">00 (440) 9865 562</a></h6>
                            <p>Mon to Fri 9am to 6 pm</p>
                        </div>
                        <div class="info_item">
                            <i class="lnr lnr-envelope"></i>
                            <h6><a href="#">support@colorlib.com</a></h6>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <form class="row contact_form" action="{{url('create-message')}}" method="post" id="contactForm"
                          novalidate="novalidate">
                        {{ csrf_field() }}
                        <div class="col-md-6">
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
        </div>
    </section>
    <!--================Contact Area =================-->
@endsection

@section('extra-scripts')
    <!-- contact js -->
    <script src="{{ asset(mix('js/website/jquery.form.js'))}}"></script>
    <script src="{{ asset(mix('js/website/jquery.validate.min.js'))}}"></script>
    <!--gmaps Js-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
    <script src="{{ asset(mix('js/website/gmaps.min.js'))}}"></script>
    <script src="{{ asset(mix('js/website/theme.js'))}}"></script>
@endsection
