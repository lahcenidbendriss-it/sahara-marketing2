import React from 'react'
import { FaFacebookF, FaWhatsapp, FaInstagram,  } from 'react-icons/fa';


function About() {
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
                                    <a className="nav-link active" href="/about">
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



            {/* <!-- breadcrumb --> */}
    <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about">
            <div class="container py-lg-5 py-sm-4">
                <div class="w3breadcrumb-gids text-center">
                    <div class="w3breadcrumb-info mt-5">
                        <h2 class="w3ltop-title pt-4">About Us</h2>
                        <ul class="breadcrumbs-custom-path">
                            <li><a href="/">Home</a></li>
                            <li class="active"><span class="fas fa-angle-double-right mx-2"></span> About </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//breadcrumb--> */}



    {/* <!-- feature with photo1 --> */}
    <section class="w3l-feature-with-photo-1">
        <div class="feature-with-photo-hny py-5">
            <div class="container py-lg-5">
                <div class="feature-with-photo-content">
                    <div class="ab-in-flow row mb-lg-5 mb-3">

                        <div class="col-lg-7 ab-right pl-lg-5">
                            <h6 class="title-subhny mb-2"><span>About Us</span></h6>
                            <h3 class="title-w3l mb-4">We’ve skilled in wide range of web and other digital market tools & designs.

                            </h3>
                            <p class="mt-4">Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia
                                id
                                erat eu ullamcorper. Nunc id ipsum fringilla,
                                gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia Excepteur sint occaecat
                                non proident, sunt in culpa quis.Nunc id ipsum fringilla.</p>

                            <div class="w3l-buttons mt-sm-5 mt-4">
                                <a class="btn btn-primary btn-style me-2" href="about">Read More </a>
                                <a class="btn btn-outline-primary btn-style mr-2" href="services">Services </a>
                            </div>
                        </div>
                        <div class="col-lg-5 ab-left ps-lg-5">
                            <img src="assets/images/ab1.jpg" class="img-fluid radius-image" alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* <!-- //feature with photo1 --> */}


    {/* <!--/team-sec--> */}
    <div class="w3l-team-main py-5" id="team">
        <div class="container py-md-5 py-3">
            <div class="header-secw3 text-center">
                <div class="header-secw3 text-center">
                    <h6 class="title-subhny mb-2">Our Team</h6>
                    <h3 class="title-w3l mb-3">
                        Creative Team
                    </h3>
                </div>

            </div>
            <div class="row w3ls_team_grids text-center">
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="/"> <img src="assets/images/team1.jpg" alt=" " class="img-fluid radius-image"/></a>
                        <div class="box-content">
                            <h3 class="title">Web Developer</h3>
                            <ul class="icon">
                                <li><a href="/" ><FaFacebookF size={20} /></a></li>
                                <li><a href="/" ><FaInstagram size={20} /></a></li>
                            </ul>
                        </div>
                    </div>

                    <h4><a href="#url" class="title-head">
                    Omar Abdullah</a></h4>
                
                </div>
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="/"> <img src="assets/images/team2.jpg" alt=" " class="img-fluid radius-image"/></a>
                        <div class="box-content">
                            <h3 class="title">Editor</h3>
                            <ul class="icon">
                            <li><a href="/" ><FaFacebookF size={20} /></a></li>
                                <li><a href="/" ><FaInstagram size={20} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4><a href="#url" class="title-head">
                    Layla Ahmed</a></h4>
                </div>
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="/"> <img src="assets/images/team3.jpg" alt=" " class="img-fluid radius-image"/></a>
                        <div class="box-content">
                            <h3 class="title">UX Designer</h3>
                            <ul class="icon">
                            <li><a href="/" ><FaFacebookF size={20} /></a></li>
                                <li><a href="/" ><FaInstagram size={20} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4><a href="#url" class="title-head">
                    Khaled Muhammad</a></h4>
                </div>
                <div class="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4">
                    <div class="box4">
                        <a href="/"> <img src="assets/images/team4.jpg" alt=" " class="img-fluid radius-image"/></a>
                        <div class="box-content">
                            <h3 class="title">Web Designer</h3>
                            <ul class="icon">
                            <li><a href="/" ><FaFacebookF size={20} /></a></li>
                                <li><a href="/" ><FaInstagram size={20} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <h4><a href="#url" class="title-head">
                    Amina Saeed </a></h4>
                </div>

            </div>
        </div>
    </div>
    {/* <!--//team-sec--> */}


    {/* <!--/w3l-project--> */}
    <section class="w3l-project-main">
        <div class="container">
            <div class="w3l-project py-md-5 py-4">
                <div class="row py-5 align-items-center">
                    <div class="col-lg-8 w3l-project-right">
                        <div class="bottom-info">
                            <div class="header-section pr-lg-5">
                                <h6 class="title-subhny mb-2">Consultation</h6>
                                <h3 class="title-w3l">Request Free Consultation <br></br>Lets Do It!
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 w3l-project-left about-w3page-btns mt-lg-0 mt-4">
                        <div class="w3l-buttons d-sm-flex">
                            <a class="btn btn-primary btn-style me-2" href="about">Read More </a>
                            <a class="btn btn-outline-primary btn-style" href="contact">Contact Us </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--//w3l-project--> */}


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
                                    <a href="contact" class="btn btn-primary btn-style"> Try it For Free </a>
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
                                    <li><a href="about">About Us</a></li>
                                    <li><a href="blog"> Blog posts</a></li>
                                    <li><a href="services">Services</a></li>
                                    <li><a href="contact">Contact us</a></li>

                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Services</h6>
                                <ul>
                                    <li><a href="#traning">Web Design</a></li>
                                    <li><a href="#traning">Development</a></li>
                                    <li><a href="#traning">Marketing Plans</a></li>
                                    <li><a href="#marketplace">Digital Services</a></li>
                                    <li><a href="#platform">Product Selling</a></li>
                                </ul>

                            </div>
                            <div class="col-lg-2 col-md-6  footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">More Info</h6>
                                <ul>
                                    <li><a href="#seo"> SEO</a></li>
                                    <li><a href="#traning">Development</a></li>
                                    <li><a href="#branding">Branding</a></li>
                                    <li><a href="#experts">Email Marketing</a></li>
                                    
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6  footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Support</h6>
                                <ul>
                                    
                                    <li><a href="#secutiry">Security</a></li>
                                    <li><a href="#mail">Mail Us</a></li>
                                    <li><a href="#terms">Terms</a></li>
                                    <li><a href="#policy">Privacy Policy</a></li>


                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="container">
                        <p class="copy-footer-29">© 2021 DigitMarketing. All rights reserved. by <a href="/" target="">
                            Lahen idbendriss</a></p>
                    </div>
                </div>


            </section>






    

    </div>
  )
}

export default About
