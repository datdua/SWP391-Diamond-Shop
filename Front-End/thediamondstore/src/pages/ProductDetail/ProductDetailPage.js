import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function ProductDetailPage() {
    return (
        <div>
            {/* <!-- Preloader --> 
            <div className="tm-preloader">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tm-preloader-logo">
                                <img src="assets/images/logo.png" alt="logo" />
                            </div>
                            <span className="tm-preloader-progress"></span>
                        </div>
                    </div>
                </div>
                <button className="tm-button tm-button-small">Cancel Preloader</button>
            </div>
            {/* <!--// Preloader -->

            <!-- Wrapper --> */}
            <div id="wrapper" className="wrapper">

                {/* <!-- Header --> */}
                <Header/>
                {/* <!--// Header --> 

                <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Product Details</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/product">Products</Link></li>
                                <li>Stylist daimond ring</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area -->


                <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Product Details Wrapper --> */}
                    <div className="tm-product-details-area tm-section tm-padding-section bg-white">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-9 col-12">

                                    {/* <!-- Product Details --> */}
                                    <div className="tm-prodetails">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-10 col-12">
                                                <div className="tm-prodetails-images">
                                                    <div className="tm-prodetails-largeimages">
                                                        <div className="tm-prodetails-largeimage">
                                                            <a data-fancybox="tm-prodetails-imagegallery"
                                                                href="assets/images/products/product-image-1.jpg"
                                                                data-caption="Product Zoom Image 1">
                                                                <img src="assets/images/products/product-image-1.jpg"
                                                                    alt="product image" />
                                                            </a>
                                                        </div>
                                                        {/*<div className="tm-prodetails-largeimage">
                                                            <a data-fancybox="tm-prodetails-imagegallery"
                                                                href="assets/images/products/product-image-2.jpg"
                                                                data-caption="Product Zoom Image 2">
                                                                <img src="assets/images/products/product-image-2.jpg"
                                                                    alt="product image" />
                                                            </a>
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <a data-fancybox="tm-prodetails-imagegallery"
                                                                href="assets/images/products/product-image-3.jpg"
                                                                data-caption="Product Zoom Image 3">
                                                                <img src="assets/images/products/product-image-3.jpg"
                                                                    alt="product image" />
                                                            </a>
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <a data-fancybox="tm-prodetails-imagegallery"
                                                                href="assets/images/products/product-image-4.jpg"
                                                                data-caption="Product Zoom Image 4">
                                                                <img src="assets/images/products/product-image-4.jpg"
                                                                    alt="product image" />
                                                            </a>
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <a data-fancybox="tm-prodetails-imagegallery"
                                                                href="assets/images/products/product-image-5.jpg"
                                                                data-caption="Product Zoom Image 5">
                                                                <img src="assets/images/products/product-image-6.jpg"
                                                                    alt="product image" />
                                                            </a>
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <a data-fancybox="tm-prodetails-imagegallery"
                                                                href="assets/images/products/product-image-6.jpg"
                                                                data-caption="Product Zoom Image 6">
                                                                <img src="assets/images/products/product-image-6.jpg"
                                                                    alt="product im0age" />
                                                            </a></div>*/}
                                                    </div>
                                                    <div className="tm-prodetails-thumbnails" style={{display:"flex"}}>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-1-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-2-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-3-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-4-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        {/*<div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-5-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-6-thumb.jpg"
                                                                alt="product image" />
                                                        </div>*/}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="tm-prodetails-content">
                                                    <h4 className="tm-prodetails-title">Stylist daimond ring</h4>
                                                    <span className="tm-prodetails-price"><del>$75.99</del> $59.99</span>
                                                    <div className="tm-ratingbox">
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span><i className="ion-android-star-outline"></i></span>
                                                    </div>
                                                    <div className="tm-prodetails-infos">
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Product ID : </b>010
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Category : </b><a href="#">Ring</a>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo tm-prodetails-tags">
                                                            <b>Tags : </b>
                                                            <ul>
                                                                <li><a href="#">bracelets</a></li>
                                                                <li><a href="#">diamond</a></li>
                                                                <li><a href="#">ring</a></li>
                                                                <li><a href="#">necklaces</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Available : </b>
                                                            <span className="color-theme">In Stock</span>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo tm-prodetails-share">
                                                            <b>Share : </b>
                                                            <ul>
                                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a>
                                                                </li>
                                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a>
                                                                </li>
                                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quemi
                                                        dolor, malesuada id metus a, mattis eleifend elit. Nullam pharetra
                                                        consequat ex in dapibus. Vestibulum ante ipsum primis in faucibus
                                                        orciluctus curae.</p>
                                                    <div className="tm-prodetails-quantitycart">
                                                        <h6>Quantity :</h6>
                                                        <div className="tm-quantitybox">
                                                            <input type="text" value="1" />
                                                        </div>
                                                        <a href="#" className="tm-button tm-button-dark">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details -->

                                    <!-- Product Details Description & Review --> */}
                                    <div className="tm-prodetails-desreview tm-padding-section-sm-top">
                                        <ul className="nav tm-tabgroup2" id="prodetails" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="prodetails-area1-tab" data-toggle="tab"
                                                    href="#prodetails-area1" role="tab" aria-controls="prodetails-area1"
                                                    aria-selected="true">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="prodetails-area2-tab" data-toggle="tab"
                                                    href="#prodetails-area2" role="tab" aria-controls="prodetails-area2"
                                                    aria-selected="false">Reviews
                                                    (1)</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="prodetails-content">
                                            <div className="tab-pane fade show active" id="prodetails-area1" role="tabpanel"
                                                aria-labelledby="prodetails-area1-tab">
                                                <div className="tm-prodetails-description">
                                                    <h4>Product Description</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        com modo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                        occaecat cupidatat non proident.</p>
                                                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                                                        adipiscing elit, sed do eiusmod tempor incid
                                                        idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo
                                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                        esse cillum dolore
                                                        eufugiat nulla pariatur. </p>

                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="prodetails-area2" role="tabpanel"
                                                aria-labelledby="prodetails-area2-tab">
                                                <div className="tm-prodetails-review">
                                                    <h5>1 Review For Stylist daimond ring</h5>
                                                    <div className="tm-comment-wrapper mb-50">
                                                        {/* <!-- Comment Single --> */}
                                                        <div className="tm-comment">
                                                            <div className="tm-comment-thumb">
                                                                <img src="assets/images/author-image-1.jpg" alt="author image" />
                                                            </div>
                                                            <div className="tm-comment-content">
                                                                <h6 className="tm-comment-authorname"><a href="#">Frida Bins</a>
                                                                </h6>
                                                                <span className="tm-comment-date">Wednesday, October 17, 2018 at
                                                                    4:00PM.</span>
                                                                <div className="tm-ratingbox">
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span><i className="ion-android-star-outline"></i></span>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                    sed do
                                                                    eiusmod
                                                                    tempor incididunt ut labore dolore magna aliqua. Ut enim ad
                                                                    minim
                                                                    veniam.</p>
                                                            </div>
                                                        </div>
                                                        {/* <!--// Comment Single --> */}
                                                    </div>

                                                    <h5>Add a review</h5>
                                                    <form action="#" className="tm-form">
                                                        <div className="tm-form-inner">
                                                            <div className="tm-form-field">
                                                                <div className="tm-ratingbox tm-ratingbox-input">
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span className="is-active"><i
                                                                        className="ion-android-star-outline"></i></span>
                                                                    <span><i className="ion-android-star-outline"></i></span>
                                                                </div>
                                                            </div>
                                                            <div className="tm-form-field tm-form-fieldhalf">
                                                                <input type="text" placeholder="Your Name*" required="required" />
                                                            </div>
                                                            <div className="tm-form-field tm-form-fieldhalf">
                                                                <input type="Email" placeholder="Your Email*"
                                                                    required="required" />
                                                            </div>
                                                            <div className="tm-form-field">
                                                                <textarea name="product-review" cols="30" rows="5"
                                                                    placeholder="Your Review"></textarea>
                                                            </div>
                                                            <div className="tm-form-field">
                                                                <button type="submit" className="tm-button">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details Description & Review --> */}

                                    <div className="tm-similliar-products tm-padding-section-sm-top">
                                        <h4 className="small-title">Similliar Products</h4>
                                        <div className="row tm-products-slider3">

                                            {/* <!-- Single Product --> */}
                                            <div className="col-4">
                                                <div className="tm-product">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-1.jpg"
                                                                alt="product image" />
                                                            <img src="assets/images/products/product-image-2.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <ul className="tm-product-actions">
                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                            </li>
                                                            <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                <i className="ion-eye"></i>
                                                            </button></li>
                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                        </ul>
                                                        <div className="tm-product-badges">
                                                            <span className="tm-product-badges-new">New</span>
                                                            <span className="tm-product-badges-sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="tm-product-bottomside">
                                                        <h6 className="tm-product-title"><a href="product-details.html">Stylist
                                                            daimond
                                                            earring</a></h6>
                                                        <div className="tm-ratingbox">
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span><i className="ion-android-star-outline"></i></span>
                                                        </div>
                                                        <span className="tm-product-price">$29.99</span>
                                                        <div className="tm-product-content">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                                Lorem
                                                                Ipsum has been the industry's standard dummy text ever since the
                                                                when an unknown printer took a galley of type and scrambled it
                                                                to make a
                                                                type specimen book. It has survived not only five centuries, but
                                                                also the
                                                                leap into electronic typesetting.</p>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                    <i className="ion-eye"></i>
                                                                </button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--// Single Product -->

                                                <!-- Single Product --> */}
                                            <div className="col-4">
                                                <div className="tm-product ">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-3.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <ul className="tm-product-actions">
                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                            </li>
                                                            <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                <i className="ion-eye"></i>
                                                            </button></li>
                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                        </ul>
                                                        <div className="tm-product-badges">
                                                            <span className="tm-product-badges-sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="tm-product-bottomside">
                                                        <h6 className="tm-product-title"><a href="product-details.html">Stylist
                                                            daimond
                                                            earring</a></h6>
                                                        <div className="tm-ratingbox">
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span><i className="ion-android-star-outline"></i></span>
                                                        </div>
                                                        <span className="tm-product-price">$29.99</span>
                                                        <div className="tm-product-content">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                                Lorem
                                                                Ipsum has been the industry's standard dummy text ever since the
                                                                when an unknown printer took a galley of type and scrambled it
                                                                to make a
                                                                type specimen book. It has survived not only five centuries, but
                                                                also the
                                                                leap into electronic typesetting.</p>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                    <i className="ion-eye"></i>
                                                                </button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--// Single Product -->

                                                <!-- Single Product --> */}
                                            <div className="col-4">
                                                <div className="tm-product ">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-4.jpg"
                                                                alt="product image" />
                                                            <img src="assets/images/products/product-image-5.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <ul className="tm-product-actions">
                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                            </li>
                                                            <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                <i className="ion-eye"></i>
                                                            </button></li>
                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                        </ul>
                                                        <div className="tm-product-badges">
                                                            <span className="tm-product-badges-soldout">Sold out</span>
                                                        </div>
                                                    </div>
                                                    <div className="tm-product-bottomside">
                                                        <h6 className="tm-product-title"><a href="product-details.html">Stylist
                                                            daimond
                                                            earring</a></h6>
                                                        <div className="tm-ratingbox">
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span><i className="ion-android-star-outline"></i></span>
                                                        </div>
                                                        <span className="tm-product-price">$29.99</span>
                                                        <div className="tm-product-content">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                                Lorem
                                                                Ipsum has been the industry's standard dummy text ever since the
                                                                when an unknown printer took a galley of type and scrambled it
                                                                to make a
                                                                type specimen book. It has survived not only five centuries, but
                                                                also the
                                                                leap into electronic typesetting.</p>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                    <i className="ion-eye"></i>
                                                                </button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--// Single Product -->

                                                    <!-- Single Product --> */}
                                            <div className="col-4">
                                                <div className="tm-product ">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-1.jpg"
                                                                alt="product image" />
                                                            <img src="assets/images/products/product-image-2.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <ul className="tm-product-actions">
                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                            </li>
                                                            <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                <i className="ion-eye"></i>
                                                            </button></li>
                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                        </ul>
                                                        <div className="tm-product-badges">
                                                            <span className="tm-product-badges-new">New</span>
                                                            <span className="tm-product-badges-sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="tm-product-bottomside">
                                                        <h6 className="tm-product-title"><a href="product-details.html">Stylist
                                                            daimond
                                                            earring</a></h6>
                                                        <div className="tm-ratingbox">
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span><i className="ion-android-star-outline"></i></span>
                                                        </div>
                                                        <span className="tm-product-price">$29.99</span>
                                                        <div className="tm-product-content">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                                Lorem
                                                                Ipsum has been the industry's standard dummy text ever since the
                                                                when an unknown printer took a galley of type and scrambled it
                                                                to make a
                                                                type specimen book. It has survived not only five centuries, but
                                                                also the
                                                                leap into electronic typesetting.</p>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                    <i className="ion-eye"></i>
                                                                </button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--// Single Product -->

                                                        <!-- Single Product --> */}
                                            <div className="col-4">
                                                <div className="tm-product ">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-3.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <ul className="tm-product-actions">
                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                            </li>
                                                            <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                <i className="ion-eye"></i>
                                                            </button></li>
                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                        </ul>
                                                        <div className="tm-product-badges">
                                                            <span className="tm-product-badges-sale">Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="tm-product-bottomside">
                                                        <h6 className="tm-product-title"><a href="product-details.html">Stylist
                                                            daimond
                                                            earring</a></h6>
                                                        <div className="tm-ratingbox">
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span><i className="ion-android-star-outline"></i></span>
                                                        </div>
                                                        <span className="tm-product-price">$29.99</span>
                                                        <div className="tm-product-content">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                                Lorem
                                                                Ipsum has been the industry's standard dummy text ever since the
                                                                when an unknown printer took a galley of type and scrambled it
                                                                to make a
                                                                type specimen book. It has survived not only five centuries, but
                                                                also the
                                                                leap into electronic typesetting.</p>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                    <i className="ion-eye"></i>
                                                                </button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--// Single Product -->

                                                        <!-- Single Product --> */}
                                            <div className="col-4">
                                                <div className="tm-product ">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-4.jpg"
                                                                alt="product image" />
                                                            <img src="assets/images/products/product-image-5.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <ul className="tm-product-actions">
                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                            </li>
                                                            <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                <i className="ion-eye"></i>
                                                            </button></li>
                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                        </ul>
                                                        <div className="tm-product-badges">
                                                            <span className="tm-product-badges-soldout">Sold out</span>
                                                        </div>
                                                    </div>
                                                    <div className="tm-product-bottomside">
                                                        <h6 className="tm-product-title"><a href="product-details.html">Stylist
                                                            daimond
                                                            earring</a></h6>
                                                        <div className="tm-ratingbox">
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span className="is-active"><i
                                                                className="ion-android-star-outline"></i></span>
                                                            <span><i className="ion-android-star-outline"></i></span>
                                                        </div>
                                                        <span className="tm-product-price">$29.99</span>
                                                        <div className="tm-product-content">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                                industry.
                                                                Lorem
                                                                Ipsum has been the industry's standard dummy text ever since the
                                                                when an unknown printer took a galley of type and scrambled it
                                                                to make a
                                                                type specimen book. It has survived not only five centuries, but
                                                                also the
                                                                leap into electronic typesetting.</p>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview">
                                                                    <i className="ion-eye"></i>
                                                                </button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--// Single Product --> */}

                                        </div>
                                    </div>

                                </div>

                                {/* <!-- Widgets --> */}
                                <div className="col-lg-3 col-12">
                                    <div className="widgets">

                                        {/* <!-- Single Widget --> */}
                                        <div className="single-widget widget-categories">
                                            <h6 className="widget-title">Categories</h6>
                                            <ul>
                                                <li><a href="products.html">Make up</a></li>
                                                <li><a href="products.html">Leapstick</a></li>
                                                <li><a href="products.html">Face Powder</a></li>
                                                <li><a href="products.html">Eyeliner</a></li>
                                                <li><a href="products.html">Maskara</a></li>
                                                <li><a href="products.html">Foundation</a></li>
                                            </ul>
                                        </div>
                                        {/* <!--// Single Widget -->

                                                        <!-- Single Widget --> */}
                                        <div className="single-widget widget-pricefilter">
                                            <h6 className="widget-title">Filter by Price</h6>
                                            <div className="widget-pricefilter-inner">
                                                <div className="tm-rangeslider" data-range_min="0" data-range_max="800"
                                                    data-cur_min="200" data-cur_max="550">
                                                    <div className="tm-rangeslider-bar nst-animating"></div>
                                                    <span className="tm-rangeslider-leftgrip nst-animating" tabindex="0"></span>
                                                    <span className="tm-rangeslider-rightgrip nst-animating" tabindex="0"></span>
                                                </div>
                                                <div className="widget-pricefilter-actions">
                                                    <p className="widget-pricefilter-price">Price: $<span
                                                        className="tm-rangeslider-leftlabel">308</span>
                                                        - $<span className="tm-rangeslider-rightlabel">798</span></p>
                                                    <button className="widget-pricefilter-button">Filter</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--// Single Widget -->

                                                        <!-- Single Widget --> */}
                                        <div className="single-widget widget-popularproduct">
                                            <h6 className="widget-title">Popular Product</h6>
                                            <ul>
                                                <li>
                                                    <a href="product-details.html" className="widget-popularproduct-image">
                                                        <img src="assets/images/products/product-image-1-thumb.jpg"
                                                            alt="product thumbnail" />
                                                    </a>
                                                    <div className="widget-popularproduct-content">
                                                        <h6><a href="product-details.html">Brown liquid inside</a></h6>
                                                        <span>$20.00</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="product-details.html" className="widget-popularproduct-image">
                                                        <img src="assets/images/products/product-image-2-thumb.jpg"
                                                            alt="product thumbnail" />
                                                    </a>
                                                    <div className="widget-popularproduct-content">
                                                        <h6><a href="product-details.html">Top of amber bottle</a></h6>
                                                        <span>$35.99</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="product-details.html" className="widget-popularproduct-image">
                                                        <img src="assets/images/products/product-image-3-thumb.jpg"
                                                            alt="product thumbnail" />
                                                    </a>
                                                    <div className="widget-popularproduct-content">
                                                        <h6><a href="product-details.html">Mario badescu bottle</a></h6>
                                                        <span>$99.99</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!--// Single Widget -->

                                                        <!-- Single Widget --> */}
                                        <div className="single-widget widget-sizes">
                                            <h6 className="widget-title">Sizes</h6>
                                            <ul>
                                                <li><a href="products.html">Small Size</a></li>
                                                <li><a href="products.html">Medium Size</a></li>
                                                <li><a href="products.html">Large Size</a></li>
                                                <li><a href="products.html">Extra Large Size</a></li>
                                            </ul>
                                        </div>
                                        {/* <!--// Single Widget --> */}

                                    </div>
                                </div>
                                {/* <!--// Widgets --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Product Details Wrapper --> */}

                </main>
                {/* <!--// Page Content -->

                                <!-- Footer --> */}
                    
                    <Footer/>
                {/* <!--// Footer -->

                                <!-- Product Quickview --> */}
                <div className="tm-product-quickview" id="tm-product-quickview">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10 col-12">
                                <div className="tm-product-quickview-inner">

                                    {/* <!-- Product Details --> */}
                                    <div className="tm-prodetails">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-10 col-12">
                                                <div className="tm-prodetails-images">
                                                    <div className="tm-prodetails-largeimages">
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-1.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-2.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-3.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-4.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-6.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-6.jpg"
                                                                alt="product image" />
                                                        </div>
                                                    </div>
                                                    <div className="tm-prodetails-thumbnails">
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-1-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-2-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-3-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-4-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-5-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-6-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="tm-prodetails-content">
                                                    <h4 className="tm-prodetails-title">Stylist daimond ring</h4>
                                                    <span className="tm-prodetails-price"><del>$75.99</del> $59.99</span>
                                                    <div className="tm-ratingbox">
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span><i className="ion-android-star-outline"></i></span>
                                                    </div>
                                                    <div className="tm-prodetails-infos">
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Product ID : </b>010
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Category : </b><a href="#">Ring</a>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo tm-prodetails-tags">
                                                            <b>Tags : </b>
                                                            <ul>
                                                                <li><a href="#">bracelets</a></li>
                                                                <li><a href="#">diamond</a></li>
                                                                <li><a href="#">ring</a></li>
                                                                <li><a href="#">necklaces</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Available : </b>
                                                            <span className="color-theme">In Stock</span>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo tm-prodetails-share">
                                                            <b>Share : </b>
                                                            <ul>
                                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a>
                                                                </li>
                                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a>
                                                                </li>
                                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quemi
                                                        dolor, malesuada id metus a, mattis eleifend elit. Nullam pharetra
                                                        consequat ex in dapibus. Vestibulum ante ipsum primis in faucibus
                                                        orciluctus curae.</p>
                                                    <div className="tm-prodetails-quantitycart">
                                                        <h6>Quantity :</h6>
                                                        <div className="tm-quantitybox">                                                          
                                                        <input type="text" defaultValue="Default text" />
                                                    </div>
                                                        <a href="#" className="tm-button tm-button-dark">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--// Product Quickview --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper --> */}

        </div>
    )
}
export default ProductDetailPage;