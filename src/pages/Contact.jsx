import React from 'react'
import { FaFacebookF, FaWhatsapp, FaInstagram,  } from 'react-icons/fa';


function Contact() {
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
                                    <a className="nav-link" href="/services">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/contact">
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
                        <h2 class="w3ltop-title pt-4">Contact Us</h2>
                        <ul class="breadcrumbs-custom-path">
                            <li><a href="/">Home</a></li>
                            <li class="active"><span class="fas fa-angle-double-right mx-2"></span> Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//breadcrumb--> */}

    {/* <!-- contact1 --> */}
    <section class="w3l-contact-1 py-5" id="contact">
        <div class="contacts-9 py-lg-5 py-md-4">
            <div class="container">
                <div class="row contact-view">
                    <div class="col-lg-5 cont-details pe-lg-5">
                        <div class="contactct-fm-text text-left">
                            <h6 class="title-subhny">Say Hello</h6>
                            <h3 class="title-w3l mb-2">Get In Touch
                            </h3>
                            <p class="mb-sm-5 mb-4">Start working with Us that can provide everything you need to generate awareness,
                                drive traffic,
                                connect.We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
                            <div class="cont-top">
                                <div class="cont-left text-center">
                                    <span class="fas fa-phone-alt"></span>
                                </div>
                                <div class="cont-right">
                                    <h5>Phone number</h5>
                                    <p><a href="tel:+(21) 255 088 4943">+(212) 255 088 4943</a></p>
                                </div>
                            </div>
                            <div class="cont-top margin-up">
                                <div class="cont-left text-center">
                                    <span class="fas fa-envelope-open-text"></span>
                                </div>
                                <div class="cont-right">
                                    <h5>Send Email</h5>
                                    <p><a href="mailto:DigitMarkrting@mail.com" class="mail">SaharaMarketing@mail.com</a></p>
                                </div>
                            </div>
                            <div class="cont-top margin-up">
                                <div class="cont-left text-center">
                                    <span class="fas fa-map-marker-alt"></span>
                                </div>
                                <div class="cont-right">
                                    <h5>Office Address</h5>
                                    <p class="pr-lg-5">Address here, 434 Agency  street,<br></br> Laayoune, MA - 70000.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 cont-details mt-lg-0 mt-5">
                        <div class="map-content-9">
                            <div class="map-iframe">
                            <iframe
  title="Google Maps showing Laayoune, Morocco"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254791.79948662196!2d-13.277342424629335!3d27.16208440347856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb5a31713a9fa7b%3A0x3788b635cebbd36c!2sLaayoune!5e0!3m2!1sen!2sma!4v1694350981312!5m2!1sen!2sma"
  width="100%"
  height="400"
  frameborder="0"
  style={{ border: "0px" }}
  allowfullscreen=""
></iframe>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- /contact1 --> */}

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
                    <a href="#trail" class="btn btn-primary btn-style"> Try it For Free </a>
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

export default Contact
