import React from 'react'
import { FaFacebookF, FaWhatsapp, FaInstagram,  } from 'react-icons/fa';


function Services() {
  return (
    <div>
        {/*/Header*/}
            {/* hell */}
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                        <h1>
                            <a className="navbar-brand pe-xl-5 pe-lg-4" href="/">
                                <span className="sublog">Sahara</span>Marketing
                            </a>
                        </h1>
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll"
                            aria-controls="navbarScroll"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/services">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="social-icons d-none d-lg-flex ms-3">
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="me-2"
                                >
                                    <FaFacebookF size={20} />
                                </a>
                                <a
                                    href="https://www.whatsapp.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="me-2"
                                >
                                    <FaWhatsapp size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* //Header*/}

            {/* <!-- breadcrumb --> */}
    <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about">
            <div class="container py-lg-5 py-sm-4">
                <div class="w3breadcrumb-gids text-center">
                    <div class="w3breadcrumb-info mt-5">
                        <h2 class="w3ltop-title pt-4">Services</h2>
                        <ul class="breadcrumbs-custom-path">
                            <li><a href="/">Home</a></li>
                            <li class="active"><span class="fas fa-angle-double-right mx-2"></span> Services </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//breadcrumb--> */}
    <section className="w3l-grids-3 py-5">
                <div className="container py-md-5 py-3">
                    <div className="row align-items-center">
                        <div className="col-lg-6 header-sec">
                            <h6 className="title-subhny mb-2">Design & Marketing</h6>
                            <h3 className="title-w3l">
                                Our Services
                            </h3>
                        </div>
                  
                    </div>
                    <div className="row bottom_grids text-left mt-lg-5 align-items-center">
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="grid-block">
                                <a href="#grids" className="d-block">
                                    <div className="grid-block-infw3">
                                        <div className="grid-block-icon"><span className="fas fa-user-shield"></span></div>
                                        <h4 className="my-3">Great Support.</h4>
                                    </div>
                                    <p className="">Our dedicated support team is here to ensure your digital marketing journey is smooth and successful. From troubleshooting to strategic advice, were always ready to assist you with personalized solutions tailored to your business needs.</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="grid-block active">
                                <a href="#grids" className="d-block">
                                    <div className="grid-block-infw3">
                                        <div className="grid-block-icon"><span className="far fa-edit"></span></div>
                                        <h4 className="my-3">Perfect Design.</h4>
                                    </div>
                                    <p className="">At Sahara Marketing, we believe that design is more than just aesthetics. Our creative team crafts visually stunning and user-friendly designs that not only captivate your audience but also enhance user experience and drive conversions </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="grid-block">
                                <a href="#grids" className="d-block">
                                    <div className="grid-block-infw3">
                                        <div className="grid-block-icon"><span className="fas fa-signal" aria-hidden="true"></span></div>

                                        <h4 className="my-3">
                                            SEO Optimized.</h4>
                                    </div>
                                    <p className="">Boost your online visibility with our expert SEO services. We use advanced strategies to optimize your website for search engines, improving your rankings, increasing traffic, and turning clicks into customers. </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="grid-block">
                                <a href="#grids" className="d-block">
                                    <div className="grid-block-infw3">
                                        <div className="grid-block-icon"><span className="fas fa-globe" aria-hidden="true"></span></div>

                                        <h4 className="my-3">
                                            WEB SITES.</h4>
                                    </div>
                                    <p className="">Your website is the digital face of your business. We specialize in developing responsive, high-performance websites that reflect your brand identity and engage visitors, helping you make a lasting first impression. </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="grid-block active">
                                <a href="#grids" className="d-block">
                                    <div className="grid-block-infw3">
                                        <div className="grid-block-icon"><span className="fas fa-users"></span></div>

                                        <h4 className="my-3">
                                            Social Media Management.</h4>
                                    </div>
                                    <p className="">Engage your audience with compelling content and strategic social media management. We help you build and maintain a strong online presence across all major platforms, driving engagement and building brand loyalty. </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="grid-block">
                                <a href="#grids" className="d-block">
                                    <div className="grid-block-infw3">
                                        <div className="grid-block-icon"><span className="fas fa-ad" aria-hidden="true"></span></div>

                                        <h4 className="my-3">
                                            Google Ads.</h4>
                                    </div>
                                    <p className="">Maximize your reach and ROI with targeted Google Ads campaigns. Our PPC experts create and manage ads that are designed to reach your ideal customers, driving more traffic to your site and generating quality leads. </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    
    {/* <!--//features section --> */}


    <section className='w3l-footer-29-main'>

<div class="footer-29 py-5">
    <div class="container py-lg-4">
        <div class="row footer-top-29">
            <div class="col-lg-4 col-md-6 footer-list-29 footer-1 pe-lg-5">
                <div class="footer-logo mb-4">
                    <h2><a class="navbar-brand" href="index.html">
                        <span class="sublog">Digit</span>Marketing
                    </a></h2>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur elit.Pellen tesque libero ut justo, ultrices in ligula accusantium libero fugit.

                </p>
                <div class="w3l-two-buttons mt-4">
                    <a href="/" class="btn btn-primary btn-style"> Try it For Free </a>
                </div>
                <div class="main-social-footer-29 mt-5">
                    <a href="#facebook" class="facebook"><span class="fab fa-facebook-f"></span></a>
                    <a href="#twitter" class="twitter"><span class="fab fa-twitter"></span></a>
                    <a href="#instagram" class="instagram"><span class="fab fa-instagram"></span></a>
                    <a href="#linkedin" class="linkedin"><span class="fab fa-linkedin-in"></span></a>
                </div>
            </div>
            <div class="col-lg-2 col-md-6 footer-list-29 footer-2 mt-sm-0 mt-5">

                <ul>
                    <h6 class="footer-title-29">Links</h6>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="blog.html"> Blog posts</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="blog.html"> Blog posts</a></li>
                    <li><a href="contact.html">Contact us</a></li>

                </ul>
            </div>
            <div class="col-lg-2 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 class="footer-title-29">Services</h6>
                <ul>
                    <li><a href="#traning">Web Design</a></li>
                    <li><a href="#traning">Development</a></li>
                    <li><a href="#traning">Marketing Plans</a></li>
                    <li><a href="#marketplace">Digital Services</a></li>
                    <li><a href="#experts">Email Marketing</a></li>
                    <li><a href="#platform">Product Selling</a></li>
                </ul>

            </div>
            <div class="col-lg-2 col-md-6  footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 class="footer-title-29">More Info</h6>
                <ul>
                    <li><a href="#seo">Offline SEO</a></li>
                    <li><a href="#traning">Development</a></li>
                    <li><a href="#hack">Growth Hacking</a></li>
                    <li><a href="#studio">Film Studio</a></li>
                    <li><a href="#branding">Branding</a></li>
                    <li><a href="#experts">Email Marketing</a></li>
                    <li><a href="#marketplace">Lead Generation</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6  footer-list-29 footer-4 mt-lg-0 mt-5">
                <h6 class="footer-title-29">Support</h6>
                <ul>
                    <li><a href="#awards">Awards</a></li>
                    <li><a href="#secutiry">Security</a></li>

                    <li><a href="#proj">Products</a></li>
                    <li><a href="#efaq">faQ</a></li>
                    <li><a href="#help">Help</a></li>
                    <li><a href="#mail">Mail Us</a></li>
                    <li><a href="#terms">Terms
                    </a></li>
                    <li><a href="#policy">Privacy Policy</a></li>


                </ul>
            </div>
        </div>

    </div>
    <div class="container">
        <p class="copy-footer-29">© 2021 DigitMarketing. All rights reserved. by <a href="https://w3layouts.com/" target="">
            Lahen idbendriss</a></p>
    </div>
</div>


</section>

      
    </div>
  )
}

export default Services
