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
                            <div class="feature-img">
                                <img class="img-fluid" src="/images/website/blog/feature-img1.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 blog_details">
                            <h2>Astronomy Binoculars A Great Alternative</h2>
                            <p class="excert">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.
                            </p>
                            <p>
                                Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                            </p>
                            <p>
                                Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
                            </p>
                        </div>
                        <div class="col-lg-12 col-md-12 ">
                            <h3 class="title_color">Property Gallery</h3>
                            <div class="row gallery-item">
                                <div class="col-md-4">
                                    <a href="/images/website/elements/g1.jpg" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/images/website/elements/g1.jpg);"></div></a>
                                </div>
                                <div class="col-md-4">
                                    <a href="/images/website/elements/g2.jpg" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/images/website/elements/g2.jpg);"></div></a>
                                </div>
                                <div class="col-md-4">
                                    <a href="/images/website/elements/g3.jpg" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/images/website/elements/g3.jpg);"></div></a>
                                </div>
                                <div class="col-md-4">
                                    <a href="/images/website/elements/g6.jpg" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/images/website/elements/g6.jpg);"></div></a>
                                </div>
                                <div class="col-md-4">
                                    <a href="/images/website/elements/g7.jpg" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/images/website/elements/g7.jpg);"></div></a>
                                </div>
                                <div class="col-md-4">
                                    <a href="/images/website/elements/g8.jpg" target="_blank" class="img-gal"><div class="single-gallery-image" style="background: url(/images/website/elements/g8.jpg);"></div></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="comment-form">
                        <h4>Property Reservation</h4>
                        <form>
                            <div class="form-group form-inline">
                                <div class="form-group col-lg-6 col-md-6 name">
                                    <input type="text" class="form-control" id="name" placeholder="Enter Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Name'">
                                </div>
                                <div class="form-group col-lg-6 col-md-6 email">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" placeholder="Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Subject'">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control mb-10" rows="5" name="message" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required=""></textarea>
                            </div>
                            <a href="#" class="primary-btn submit_btn">Reserve</a>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget post_category_widget">
                            <h4 class="widget_title">Post Catgories</h4>
                            <ul class="list cat-list">
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Technology</p>
                                        <p>37</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Lifestyle</p>
                                        <p>24</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Fashion</p>
                                        <p>59</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Art</p>
                                        <p>29</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Food</p>
                                        <p>15</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Architecture</p>
                                        <p>09</p>
                                    </a>
                                </li>
                                <li>
                                    <a class="d-flex justify-content-between">
                                        <p>Adventure</p>
                                        <p>44</p>
                                    </a>
                                </li>
                            </ul>
                            <div class="br"></div>
                        </aside>
                        <aside class="single-sidebar-widget tag_cloud_widget">
                            <h4 class="widget_title">Property Features</h4>
                            <ul class="list">
                                <li><a>Technology</a></li>
                                <li><a>Fashion</a></li>
                                <li><a>Architecture</a></li>
                                <li><a>Fashion</a></li>
                                <li><a>Food</a></li>
                                <li><a>Technology</a></li>
                                <li><a>Lifestyle</a></li>
                                <li><a>Art</a></li>
                                <li><a>Adventure</a></li>
                                <li><a>Food</a></li>
                                <li><a>Lifestyle</a></li>
                                <li><a>Adventure</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================Blog Area =================-->
@endsection
