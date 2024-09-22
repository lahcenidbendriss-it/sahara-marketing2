import React, { useState,useEffect } from 'react'
import { FaFacebookF, FaWhatsapp, FaInstagram,  }from 'react-icons/fa';
import '../App.css'

import axios from "axios";



function Home() {


    const images = [
        "assets/images/banner1.jpg",
        "assets/images/banner2.jpg", // Add more images here
        "assets/images/banner3.jpg",
        "assets/images/banner4.jpg",
        "assets/images/banner5.jpg",
        "assets/images/banner6.jpg"
      ];



    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Function to swap the image every 2 seconds
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // Change image every 2000ms (2 seconds)
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, [images.length]);



    const [email, setEmail] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to backend to add email
            await axios.post("http://localhost:3500/users", { email });
            setEmail(""); // Clear input field after submission
            alert("Thank you for subscribing!"); // Optional success message
        } catch (error) {
            console.error("Error adding email:", error);
            alert("There was an error. Please try again."); // Optional error message
        }
    };


    return (
        <div>

            {/*/Header*/}
            {/* hell */}
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                        <h1>
                            <a className="navbar-brand pe-xl-5 pe-lg-4" href="/home">
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
                                    <a className="nav-link active" aria-current="page" href="/">
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


            {/* -------------------------------------------------------------------------------------------------------------------------------------*/}

            {/*  main-slider */}
            <section className="w3l-main-content" id="home">
                <div className="container">
                    <div className="row align-items-center w3l-slider-grids">
                        <div className="col-lg-6 w3l-slider-left-info pe-lg-5">
                            <h6 className="title-subhny mb-2">We are gathered</h6>
                            <h3 className="mb-2 title"> Agence de Marketing Digital  </h3>
                            
                            <p className="w3banr-p">SaharaMarketing is your digital transformation expert, offering fast and effective marketing solutions to attract customers to your brand. We help you outperform your competitors and achieve remarkable business success. </p>
                            <div className="w3l-buttons mt-sm-5 mt-4">
                                <a className="btn btn-primary btn-style me-2" href="about">Read More </a>
                                <a className="btn btn-outline-primary btn-style " href="contact"> Get Started </a>
                            </div>
                        </div>
                        <div className="col-lg-6 w3l-slider-right-info mt-lg-0 mt-5 ps-lg-5 align-items-center">
                            <div className="w3l-main-slider banner-slider">

                                <div className="slider-info">
                                    <div className="w3l-slidehny-img banner-top1">
                                          <img
                                            src={images[currentImageIndex]}
                                             alt=""
                                             className="radius-image img-fluid"
                                            />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  /main-slider */}

            {/*-------------------------------------------------------------------------grids*/}

            <section className="w3l-grids-3 py-5">
                <div className="container py-md-5 py-3">
                    <div className="row align-items-center">
                        <div className="col-lg-6 header-sec">
                            <h6 className="title-subhny mb-2">Design & Marketing</h6>
                            <h3 className="title-w3l">
                                Let's grow your business together.
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
            {/*//grids*/}

            {/*/-------------circles-section*/}
            <section class="w3l-circles-sec" id="circle">
                <div class="midd-w3 py-5">
                    <div class="container py-lg-5 py-3">
                        {/*/row-2*/}
                        <div class="w3l-circles">
                            <div class="w3l-circles-infhny">
                                <div class="title-content text-left">
                                    <h6 class="title-subhny mb-2">Open the future</h6>
                                    <h3 class="title-w3l two">Innovative Design & Branding

                                    </h3>
                                </div>
                                <p class="mt-md-4 mt-3">fuses creativity with strategic thinking to craft unique visual identities that resonate with audiences, elevating brand presence and driving business growth </p>

                            </div>
                        </div>
                        {/*//row-2*/}

                    </div>
                </div>
            </section>
            {/*//circles-section*/}

            {/*/img-grids*/}
            <section class="w3l-img-grids" id="gridsimg">
                <div class="blog py-5" id="classes">
                    <div class="container py-lg-5">
                        <div class="row align-items-center">
                            <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                                <div class="w3img-grids-info">
                                    <div class="w3img-grids-info-gd position-relative">
                                        <a href="#services">
                                            <div class="page">
                                                <div class="photobox photobox_triangular photobox_scale-rotated">
                                                    <div class="photobox__previewbox media-placeholder">
                                                        <img class="img-fluid photobox__preview media-placeholder__media radius-image" src="assets/images/g1.jpg" alt="" />
                                                    </div>
                                                    <div class="photobox__info-wrapper">
                                                        <div class="photobox__info"><span>Responsive</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="w3img-grids-info-gd-content mt-4">
                                            <a href="#gridsimg" class="titile-img d-block">
                                                <h4 class="mb-2">
                                                    Research.</h4>
                                            </a>
                                            <p class="">We conduct in-depth research to tailor strategies that perfectly align with your business goals. </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                                <div class="w3img-grids-info">
                                    <div class="w3img-grids-info-gd position-relative">
                                        <a href="#services">
                                            <div class="page">

                                                <div class="photobox photobox_triangular photobox_scale-rotated">
                                                    <div class="photobox__previewbox media-placeholder">
                                                        <img class="img-fluid photobox__preview media-placeholder__media radius-image" src="assets/images/g2.jpg" alt="" />
                                                    </div>
                                                    <div class="photobox__info-wrapper">
                                                        <div class="photobox__info"><span>Unlimited </span></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </a>
                                        <div class="w3img-grids-info-gd-content mt-4">
                                            <a href="#gridsimg" class="titile-img d-block">
                                                <h4 class="mb-2">
                                                    Presentation.</h4>
                                            </a>
                                            <p class="">Our expert presentations clearly convey your brand's message and engage your target audience. </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                                <div class="w3img-grids-info">
                                    <div class="w3img-grids-info-gd position-relative">
                                        <a href="#services">
                                            <div class="page">
                                                <div class="photobox photobox_triangular photobox_scale-rotated">
                                                    <div class="photobox__previewbox media-placeholder">
                                                        <img class="img-fluid photobox__preview media-placeholder__media radius-image" src="assets/images/g3.jpg" alt="" />
                                                    </div>
                                                    <div class="photobox__info-wrapper">
                                                        <div class="photobox__info"><span> Integration</span></div>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                        <div class="w3img-grids-info-gd-content mt-4">
                                            <a href="#gridsimg" class="titile-img d-block">
                                                <h4 class="mb-2">
                                                    Meeting.</h4>
                                            </a>
                                            <p class="">Collaborate with our team in dynamic meetings to create effective, results-driven marketing strategies. </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*//img-grids*/}





            {/*/tabs-faqs*/}
            {/* <section class="w3l-products w3l-faq-block py-5" id="projects">
                <div class="container py-md-5 py-2">
                    <div class="header-secw3 text-center mb-5">
                        <h6 class="title-subhny mb-2">faqs</h6>
                        <h3 class="title-w3l mb-4">Ask Your Questions

                        </h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mx-auto pe-lg-5">
                            <div class="w3hny-business-img">
                                <img src="assets/images/g8.jpg" alt="" class="img-fluid radius-image" />
                            </div>

                        </div>
                        <div class="col-lg-6 mt-lg-0 mt-sm-5 mt-4">
                            <div class="accordion">
                                <div class="accordion-item">
                                    <button id="accordion-button-1" aria-expanded="true"><span class="accordion-title">How much does
                                        a static website cost?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-2" aria-expanded="false"><span class="accordion-title">How to
                                        choose a best web template?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut pretium.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-3" aria-expanded="false"><span class="accordion-title">How to download a
                                        template?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut tortor.</p>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <button id="accordion-button-4" aria-expanded="false"><span class="accordion-title">Why should i choose a
                                        free website?</span><span class="icon" aria-hidden="true"></span></button>
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis
                                            ut. Ut potenti.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*//tabs-faqs*/}


            {/* testimonials */}
            <section className="w3l-clients" id="clients">
                {/* /grids */}
                <div class="cusrtomer-layout py-5">
                    <div class="container py-lg-5 py-md-3">
                        {/* /grids */}
                        <div class="testimonial-width">

                            <div class="item">
                                <div class="testimonial-content">
                                    <div class="testimonial">
                                        <blockquote>
                                            <i class="fas fa-quote-left"></i>
                                            <q> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                Dolores molestias adipisci dolor sit amet!.
                                                Lorem ipsum dolor sit amet.</q>
                                        </blockquote>
                                        <div class="testi-des">

                                            <div class="peopl align-self">
                                                <h3>John wilson</h3>
                                                <p class="indentity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /grids */}
                </div>
                {/* //grids */}
            </section>


            {/* //testimonials */}

            {/* /w3l-project*/}
            <section className="w3l-project-main">
      <div className="container">
        <div className="w3l-project py-md-5 py-4">
          <div className="row py-5 align-items-center">
            <div className="col-lg-6 w3l-project-right">
              <div className="bottom-info">
                <div className="header-section pr-lg-5">
                  <h6 className="title-subhny mb-2">Stay Update!</h6>
                  <h3 className="title-w3l">Subscribe to our newsletter</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 w3l-project-left">
            <form className="subscribe-wthree mt-lg-5 mt-4" onSubmit={handleSubmit}>
                <div className="flex-wrap subscribe-wthree-field">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email Address"
                        value={email} // Set the state value to input
                        onChange={(e) => setEmail(e.target.value)} // Handle email input
                        required
                    />
                    <button className="btn btn-style btn-primary" type="submit">
                        Subscribe
                    </button>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
            {/* //w3l-project*/}


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

export default Home
