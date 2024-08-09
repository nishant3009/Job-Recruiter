import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div>

            <div class="inner-banner-w3ls">
            </div>

            <nav aria-label="breadcrumb" />
            <ol class="breadcrumb d-flex justify-content-center bg-theme">
                <li class="breadcrumb-item">
                    <a href="/" class="text-white" > Home</a>
                </li>
                <li class="breadcrumb-item active text-white font-weight-bold" aria-current="page"> About </li>
            </ol>
            <section class="about-wthree py-3">
                <div class="container  py-sm-5">
                    <div class="title-sec-w3layouts_pvt text-center" style={{ marginTop:"-25px" }}>
                        <span class="title-wthree">a world full of possibilities</span>
                        <h4 class="w3layouts_pvt-head">allowing you to expand quickly.</h4>
                    </div>
                    <div class="row head-row-home justify-content-center"style={{ marginTop:"-25px" }}>
                        <div class="col-md-4 my-4 home-grid">
                            <span class="head-line"></span>
                            <span class="fa fa-info-circle" aria-hidden="true"></span>
                            <h4 class="home-title my-3">why choose us</h4>
                            <p style={{ textAlign: "justify" }}>
                                Choose us because we're dedicated to your success.
                                This platform offers diverse job listings, personalized support, and easy navigation.
                                We prioritize your needs, partnering with trusted employers and providing resources for career development.
                                We strive to empower every individual on their journey to finding the perfect job.
                            </p>
                        </div>
                        <div class="col-md-4 my-4 home-grid">
                            <span class="head-line"></span>
                            <span class="fa fa-connectdevelop" aria-hidden="true"></span>
                            <h4 class="home-title my-3">what we do</h4>
                            <p style={{ textAlign: "justify" }}> We connect job seekers with opportunities by providing a user-friendly platform with comprehensive job listings, personalized support, and helpful resources, while also partnering with trusted employers and promoting diversity and inclusion.</p>
                        </div>
                        <div class="col-md-4 my-4 home-grid">
                            <span class="fa fa-users" aria-hidden="true"></span>
                            <h4 class="home-title my-3">explore yourself</h4>
                            <p style={{ textAlign: "justify" }}> Explore various job opportunities, uncover new skills, and advance your career with our user-friendly platform and supportive resources. Unlock your future today!</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

    )
}
export default About