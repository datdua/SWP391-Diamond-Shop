import React from "react";
function Product() {
    return (
        <div>
            {/* <!-- Preloader --> */}
            <div className="tm-preloader">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tm-preloader-logo">
                                <img src="assets/images/logo.png" alt="logo"/>
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
                <div className="tm-header tm-header-sticky">

                    {/* <!-- Header Top Area --> */}
                    <div className="tm-header-toparea bg-black">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-12">
                                    <ul className="tm-header-info">
                                        <li><a href="tel:18883456789"><i className="ion-ios-telephone"></i>1-888-345-6789</a></li>
                                        <li><a href="mailto:contact@example.com"><i
                                            className="ion-android-mail"></i>contact@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="tm-header-options">
                                        <div className="tm-dropdown tm-header-links">
                                            <button>My Account</button>
                                            <ul>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login-register.html">Login/Register</a></li>
                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-dropdown tm-header-currency">
                                            <button>USD</button>
                                            <ul>
                                                <li><a href="#">USD</a></li>
                                                <li><a href="#">EUR</a></li>
                                                <li><a href="#">JPY</a></li>
                                                <li><a href="#">GBP</a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-dropdown tm-header-language">
                                            <button><img src="assets/images/flag-english.png" alt="language"/>English</button>
                                            <ul>
                                                <li><a href="#"><img src="assets/images/flag-english.png"
                                                    alt="language"/>English</a></li>
                                                <li><a href="#"><img src="assets/images/flag-spain.png"
                                                    alt="language"/>Spanish</a></li>
                                                <li><a href="#"><img src="assets/images/flag-russian.png"
                                                    alt="language"/>Russian</a></li>
                                                <li><a href="#"><img src="assets/images/flag-french.png"
                                                    alt="language"/>French</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Header Top Area -->

                    <!-- Header Middle Area --> */}
                    <div className="tm-header-middlearea bg-white">
                        <div className="container">
                            <div className="tm-mobilenav"></div>
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-6 order-1 order-lg-1">
                                    <a href="index.html" className="tm-header-logo">
                                        <img src="assets/images/logo.png" alt="surose"/>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-12 order-3 order-lg-2">
                                    <form className="tm-header-search">
                                        <input type="text" placeholder="Search product..."/>
                                            <button><i className="ion-android-search"></i></button>
                                    </form>
                                </div>
                                <div className="col-lg-3 col-6 order-2 order-lg-3">
                                    <ul className="tm-header-icons">
                                        <li><a href="wishlist.html"><i className="ion-android-favorite-outline"></i><span>0</span></a></li>
                                        <li><a href="cart.html"><i className="ion-bag"></i><span>0</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Header Middle Area -->

                    <!-- Header Bottom Area --> */}
                    <div className="tm-header-bottomarea bg-white">
                        <div className="container">
                            <nav className="tm-header-nav">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="tm-header-nav-dropdown"><a href="products.html">Shop</a>
                                        <ul>
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="products-leftsidebar.html">Products Left Sidebar</a></li>
                                            <li><a href="products-nosidebar.html">Products Without Sidebar</a></li>
                                            <li><a href="products-4-column.html">Products 4 Column</a></li>
                                            <li><a href="product-details.html">Product Details</a></li>
                                            <li><a href="product-details-leftsidebar.html">Product Details Left Sidebar</a></li>
                                            <li><a href="product-details-nosidebar.html">Product Details Without Sidebar</a>
                                            </li>
                                            <li><a href="#">Others</a>
                                                <ul>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login / Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="tm-header-nav-megamenu"><a href="index.html">Pages</a>

                                        <ul>
                                            <li><a href="shop.html">Common Pages</a>
                                                <ul>
                                                    <li><a href="index.html">Homepage</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="portfolios.html">Portfolios</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog Pages</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-leftsidebar.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-leftsidebar.html">Blog Details Left Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Shop Pages</a>
                                                <ul>
                                                    <li><a href="products.html">Products</a></li>
                                                    <li><a href="products-leftsidebar.html">Products Left Sidebar</a></li>
                                                    <li><a href="products-nosidebar.html">Products Without Sidebar</a></li>
                                                    <li><a href="products-4-column.html">Products 4 Column</a></li>
                                                    <li><a href="product-details.html">Product Details</a></li>
                                                    <li><a href="product-details-leftsidebar.html">Product Details Left
                                                        Sidebar</a></li>
                                                    <li><a href="product-details-nosidebar.html">Product Details Without
                                                        Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Shop Related Pages</a>
                                                <ul>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login / Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="tm-header-nav-dropdown"><a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-leftsidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                            <li><a href="blog-details-leftsidebar.html">Blog Details Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <!--// Header Bottom Area --> */}

                </div>
                {/* <!--// Header -->

                <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" data-bgimage="assets/images/breadcrumb-bg.jpg">
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Products</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Shop</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area --> */}


                {/* <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Products Wrapper --> */}
                    <div className="tm-products-area tm-section tm-padding-section bg-white">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-9 col-12">
                                    <form action="#" className="tm-shop-header">
                                        <div className="tm-shop-productview">
                                            <span>View:</span>
                                            <button data-view="grid" className="active"><i className="ion-android-apps"></i></button>
                                            <button data-view="list"><i className="ion-android-menu"></i></button>
                                        </div>
                                        <p className="tm-shop-countview">Showing 1 to 9 of 16 </p>
                                        <select>
                                            <option value="value">Default Sorting</option>
                                            <option value="value">Name A-Z</option>
                                            <option value="value">Date</option>
                                            <option value="value">Best Sellers</option>
                                            <option value="value">Trending</option>
                                        </select>
                                    </form>

                                    <div className="tm-shop-products">
                                        <div className="row mt-30-reverse">

                                            {/* <!-- Single Product --> */}
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                <div className="tm-product tm-scrollanim">
                                                    <div className="tm-product-topside">
                                                        <div className="tm-product-images">
                                                            <img src="assets/images/products/product-image-1.jpg"
                                                                alt="product image"/>
                                                                <img src="assets/images/products/product-image-2.jpg"
                                                                    alt="product image"/>
                                                                </div>
                                                                <ul className="tm-product-actions">
                                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                    </li>
                                                                    <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                        className="ion-eye"></i></button></li>
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
                                                                    <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                        className="ion-eye"></i></button></li>
                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--// Single Product -->

                                                <!-- Single Product --> */}
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                    <div className="tm-product tm-scrollanim">
                                                        <div className="tm-product-topside">
                                                            <div className="tm-product-images">
                                                                <img src="assets/images/products/product-image-3.jpg"
                                                                    alt="product image"/>
                                                            </div>
                                                            <ul className="tm-product-actions">
                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                </li>
                                                                <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                    className="ion-eye"></i></button></li>
                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                            </ul>
                                                            <div className="tm-product-badges">
                                                                <span className="tm-product-badges-new">New</span>
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
                                                                    <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                        className="ion-eye"></i></button></li>
                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--// Single Product -->

                                                <!-- Single Product --> */}
                                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                    <div className="tm-product tm-scrollanim">
                                                        <div className="tm-product-topside">
                                                            <div className="tm-product-images">
                                                                <img src="assets/images/products/product-image-4.jpg"
                                                                    alt="product image"/>
                                                                    <img src="assets/images/products/product-image-5.jpg"
                                                                        alt="product image"/>
                                                                    </div>
                                                                    <ul className="tm-product-actions">
                                                                        <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                        </li>
                                                                        <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                            className="ion-eye"></i></button></li>
                                                                        <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                    </ul>
                                                                    <div className="tm-product-badges">
                                                                        <span className="tm-product-badges-new">New</span>
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
                                                                        <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                            className="ion-eye"></i></button></li>
                                                                        <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--// Single Product -->

                                                    <!-- Single Product --> */}
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                        <div className="tm-product tm-scrollanim">
                                                            <div className="tm-product-topside">
                                                                <div className="tm-product-images">
                                                                    <img src="assets/images/products/product-image-6.jpg"
                                                                        alt="product image"/>
                                                                        <img src="assets/images/products/product-image-7.jpg"
                                                                            alt="product image"/>
                                                                        </div>
                                                                        <ul className="tm-product-actions">
                                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                            </li>
                                                                            <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                className="ion-eye"></i></button></li>
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
                                                                            <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                className="ion-eye"></i></button></li>
                                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!--// Single Product -->

                                                        <!-- Single Product --> */}
                                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                            <div className="tm-product tm-scrollanim">
                                                                <div className="tm-product-topside">
                                                                    <div className="tm-product-images">
                                                                        <img src="assets/images/products/product-image-8.jpg"
                                                                            alt="product image"/>
                                                                    </div>
                                                                    <ul className="tm-product-actions">
                                                                        <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                        </li>
                                                                        <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                            className="ion-eye"></i></button></li>
                                                                        <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                    </ul>
                                                                    <div className="tm-product-badges">
                                                                        <span className="tm-product-badges-new">New</span>
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
                                                                            <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                className="ion-eye"></i></button></li>
                                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!--// Single Product -->

                                                        <!-- Single Product --> */}
                                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                            <div className="tm-product tm-scrollanim">
                                                                <div className="tm-product-topside">
                                                                    <div className="tm-product-images">
                                                                        <img src="assets/images/products/product-image-9.jpg"
                                                                            alt="product image"/>
                                                                            <img src="assets/images/products/product-image-10.jpg"
                                                                                alt="product image"/>
                                                                            </div>
                                                                            <ul className="tm-product-actions">
                                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                </li>
                                                                                <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                    className="ion-eye"></i></button></li>
                                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                            </ul>
                                                                            <div className="tm-product-badges">
                                                                                <span className="tm-product-badges-new">New</span>
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
                                                                                <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                    className="ion-eye"></i></button></li>
                                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!--// Single Product -->

                                                            <!-- Single Product --> */}
                                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                                <div className="tm-product tm-scrollanim">
                                                                    <div className="tm-product-topside">
                                                                        <div className="tm-product-images">
                                                                            <img src="assets/images/products/product-image-11.jpg"
                                                                                alt="product image"/>
                                                                                <img src="assets/images/products/product-image-12.jpg"
                                                                                    alt="product image"/>
                                                                                </div>
                                                                                <ul className="tm-product-actions">
                                                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                    </li>
                                                                                    <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                        className="ion-eye"></i></button></li>
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
                                                                                    <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                        className="ion-eye"></i></button></li>
                                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!--// Single Product -->

                                                                <!-- Single Product --> */}
                                                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                                    <div className="tm-product tm-scrollanim">
                                                                        <div className="tm-product-topside">
                                                                            <div className="tm-product-images">
                                                                                <img src="assets/images/products/product-image-3.jpg"
                                                                                    alt="product image"/>
                                                                            </div>
                                                                            <ul className="tm-product-actions">
                                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                </li>
                                                                                <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                    className="ion-eye"></i></button></li>
                                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                            </ul>
                                                                            <div className="tm-product-badges">
                                                                                <span className="tm-product-badges-new">New</span>
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
                                                                                    <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                        className="ion-eye"></i></button></li>
                                                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!--// Single Product -->

                                                                <!-- Single Product --> */}
                                                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                                    <div className="tm-product tm-scrollanim">
                                                                        <div className="tm-product-topside">
                                                                            <div className="tm-product-images">
                                                                                <img src="assets/images/products/product-image-4.jpg"
                                                                                    alt="product image"/>
                                                                                    <img src="assets/images/products/product-image-5.jpg"
                                                                                        alt="product image"/>
                                                                                    </div>
                                                                                    <ul className="tm-product-actions">
                                                                                        <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                        </li>
                                                                                        <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                            className="ion-eye"></i></button></li>
                                                                                        <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                    </ul>
                                                                                    <div className="tm-product-badges">
                                                                                        <span className="tm-product-badges-new">New</span>
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
                                                                                        <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                            className="ion-eye"></i></button></li>
                                                                                        <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--// Single Product -->

                                                                    <!-- Single Product --> */}
                                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                                        <div className="tm-product tm-scrollanim">
                                                                            <div className="tm-product-topside">
                                                                                <div className="tm-product-images">
                                                                                    <img src="assets/images/products/product-image-7.jpg"
                                                                                        alt="product image"/>
                                                                                        <img src="assets/images/products/product-image-8.jpg"
                                                                                            alt="product image"/>
                                                                                        </div>
                                                                                        <ul className="tm-product-actions">
                                                                                            <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                            </li>
                                                                                            <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                                className="ion-eye"></i></button></li>
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
                                                                                            <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                                className="ion-eye"></i></button></li>
                                                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!--// Single Product -->

                                                                        <!-- Single Product --> */}
                                                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                                            <div className="tm-product tm-scrollanim">
                                                                                <div className="tm-product-topside">
                                                                                    <div className="tm-product-images">
                                                                                        <img src="assets/images/products/product-image-9.jpg"
                                                                                            alt="product image"/>
                                                                                    </div>
                                                                                    <ul className="tm-product-actions">
                                                                                        <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                        </li>
                                                                                        <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                            className="ion-eye"></i></button></li>
                                                                                        <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                    </ul>
                                                                                    <div className="tm-product-badges">
                                                                                        <span className="tm-product-badges-new">New</span>
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
                                                                                            <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                                className="ion-eye"></i></button></li>
                                                                                            <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        {/* <!--// Single Product -->

                                                                        <!-- Single Product --> */}
                                                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-50">
                                                                            <div className="tm-product tm-scrollanim">
                                                                                <div className="tm-product-topside">
                                                                                    <div className="tm-product-images">
                                                                                        <img src="assets/images/products/product-image-1.jpg"
                                                                                            alt="product image"/>
                                                                                            <img src="assets/images/products/product-image-2.jpg"
                                                                                                alt="product image"/>
                                                                                            </div>
                                                                                            <ul className="tm-product-actions">
                                                                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a>
                                                                                                </li>
                                                                                                <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                                    className="ion-eye"></i></button></li>
                                                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                            </ul>
                                                                                            <div className="tm-product-badges">
                                                                                                <span className="tm-product-badges-new">New</span>
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
                                                                                                <li><button data-fancybox data-src="#tm-product-quickview"><i
                                                                                                    className="ion-eye"></i></button></li>
                                                                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <!--// Single Product --> */}

                                                                        </div>
                                                                    </div>

                                                                    <div className="tm-pagination mt-50">
                                                                        <ul>
                                                                            <li className="is-active"><a href="products.html">1</a></li>
                                                                            <li><a href="products.html">2</a></li>
                                                                            <li><a href="products.html">3</a></li>
                                                                            <li><a href="products.html">4</a></li>
                                                                            <li><a href="products.html"><i className="ion-chevron-right"></i></a></li>
                                                                        </ul>
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
                                                                                            alt="product thumbnail"/>
                                                                                    </a>
                                                                                    <div className="widget-popularproduct-content">
                                                                                        <h6><a href="product-details.html">Brown liquid inside</a></h6>
                                                                                        <span>$20.00</span>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="product-details.html" className="widget-popularproduct-image">
                                                                                        <img src="assets/images/products/product-image-2-thumb.jpg"
                                                                                            alt="product thumbnail"/>
                                                                                    </a>
                                                                                    <div className="widget-popularproduct-content">
                                                                                        <h6><a href="product-details.html">Top of amber bottle</a></h6>
                                                                                        <span>$35.99</span>
                                                                                    </div>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="product-details.html" className="widget-popularproduct-image">
                                                                                        <img src="assets/images/products/product-image-3-thumb.jpg"
                                                                                            alt="product thumbnail"/>
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
                                                    {/* <!--// Products Wrapper --> */}

                                                </main>
                                                {/* <!--// Page Content -->

                                                <!-- Footer --> */}
                                                <div className="tm-footer">

                                                    {/* <!-- Instagram Photos --> */}
                                                    <ul id="instafeed" className="tm-instaphotos"></ul>
                                                    {/* <!--// Instagram Photos -->

                                                    <!-- Footer Top Area --> */}
                                                    <div className="tm-footer-toparea tm-padding-section">
                                                        <div className="container">
                                                            <div className="widgets widgets-footer row">

                                                                {/* <!-- Single Widget --> */}
                                                                <div className="col-lg-3 col-md-6 col-12">
                                                                    <div className="single-widget widget-info">
                                                                        <a className="widget-info-logo" href="index.html"><img src="assets/images/logo.png"
                                                                            alt="logo"/></a>
                                                                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                                                                        <ul>
                                                                            <li><b>Address :</b>2726 Avenue Papineau Montreal, QC, Canada</li>
                                                                            <li><b>Phone :</b><a href="tel:+18009156270">1-800-915-6270</a></li>
                                                                            <li><b>Email :</b><a href="mailto:info@example.com">info@example.com</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* <!--// Single Widget -->

                                                                <!-- Single Widget --> */}
                                                                <div className="col-lg-3 col-md-6 col-12">
                                                                    <div className="single-widget widget-quicklinks">
                                                                        <h6 className="widget-title">Useful Link</h6>
                                                                        <ul>
                                                                            <li><a href="about.html">About Us</a></li>
                                                                            <li><a href="#">Delivery Info</a></li>
                                                                            <li><a href="#">Privacy & Policy</a></li>
                                                                            <li><a href="#">Returns & Refunds</a></li>
                                                                            <li><a href="#">Terms & Conditions</a></li>
                                                                            <li><a href="contact.html">Contact Us</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* <!--// Single Widget -->

                                                                <!-- Single Widget --> */}
                                                                <div className="col-lg-3 col-md-6 col-12">
                                                                    <div className="single-widget widget-quicklinks">
                                                                        <h6 className="widget-title">My Account</h6>
                                                                        <ul>
                                                                            <li><a href="my-account.html">My account</a></li>
                                                                            <li><a href="cart.html">Cart</a></li>
                                                                            <li><a href="wishlist.html">Wishlist</a></li>
                                                                            <li><a href="#">Newsletter</a></li>
                                                                            <li><a href="#">Check out</a></li>
                                                                            <li><a href="#">Frequently Questions</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                {/* <!--// Single Widget -->

                                                                <!-- Single Widget --> */}
                                                                <div className="col-lg-3 col-md-6 col-12">
                                                                    <div className="single-widget widget-newsletter">
                                                                        <h6 className="widget-title">Join Our Newsletter</h6>
                                                                        <p>Get Business news, tip and solutions to
                                                                            your problems from our experts.</p>
                                                                        <form id="tm-mailchimp-form" className="widget-newsletter-form">
                                                                            <input id="mc-email" type="text" placeholder="Enter email address"/>
                                                                                <button id="mc-submit" type="submit" className="tm-button">Subscribe Now
                                                                                    <b></b></button>
                                                                        </form>
                                                                        {/* <!-- Mailchimp Alerts --> */}
                                                                        <div className="tm-mailchimp-alerts">
                                                                            <div className="tm-mailchimp-submitting"></div>
                                                                            <div className="mailchimp-success"></div>
                                                                            <div className="tm-mailchimp-error"></div>
                                                                        </div>
                                                                        {/* <!--// Mailchimp Alerts --> */}
                                                                    </div>
                                                                </div>
                                                                {/* <!--// Single Widget --> */}

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--// Footer Top Area -->

                                                    <!-- Footer Bottom Area --> */}
                                                    <div className="tm-footer-bottomarea">
                                                        <div className="container">
                                                            <div className="row align-items-center">
                                                                <div className="col-md-7">
                                                                    <p className="tm-footer-copyright">©
                                                                        2019. Designed by <a href="https://thememarch.com">ThemeMarch</a></p>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <div className="tm-footer-payment">
                                                                        <img src="assets/images/payment-methods.png" alt="payment methods"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--// Footer Bottom Area --> */}

                                                </div>
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
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-largeimage">
                                                                                            <img src="assets/images/products/product-image-2.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-largeimage">
                                                                                            <img src="assets/images/products/product-image-3.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-largeimage">
                                                                                            <img src="assets/images/products/product-image-4.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-largeimage">
                                                                                            <img src="assets/images/products/product-image-6.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-largeimage">
                                                                                            <img src="assets/images/products/product-image-6.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="tm-prodetails-thumbnails">
                                                                                        <div className="tm-prodetails-thumbnail">
                                                                                            <img src="assets/images/products/product-image-1-thumb.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-thumbnail">
                                                                                            <img src="assets/images/products/product-image-2-thumb.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-thumbnail">
                                                                                            <img src="assets/images/products/product-image-3-thumb.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-thumbnail">
                                                                                            <img src="assets/images/products/product-image-4-thumb.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-thumbnail">
                                                                                            <img src="assets/images/products/product-image-5-thumb.jpg"
                                                                                                alt="product image"/>
                                                                                        </div>
                                                                                        <div className="tm-prodetails-thumbnail">
                                                                                            <img src="assets/images/products/product-image-6-thumb.jpg"
                                                                                                alt="product image"/>
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
                                                                                            <input type="text" value="1"/>
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
export default Product;