import React from "react";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer id="footer" class="py-sm-5 py-4 bg-theme" >
                <div class="container" style={{ marginTop: "-60px" }}>
                    <div class="row  pt-5">
                        <div class="col-lg-5 col-sm-6 footer_grid1" >
                            <h5> About Job Recruiter</h5>
                            <p class="text-white" style={{ textAlign: "justify" }}>
                                Opportunitybuzz is premier destination for connecting talented individuals with exciting career opportunities.
                                This platform is dedicated to streamlining the job search process, providing a seamless experience for both employers and job seekers.
                                With a vast network of companies and candidates, we facilitate meaningful connections that drive success.
                                Explore our diverse range of job listings, industry insights, and career resources to embark on your next professional journey.
                                Join us in shaping the future of work, one placement at a time.
                            </p>
                        </div>
                        <div class="col-lg-4 col-sm-6 footer_grid1" style={{ marginLeft: "50px" }} >
                            <h5>Contact Us</h5>
                            <div class="d-flex align-items-center">
                                <span ><b> Contact No: </b>+456 123 7890</span>
                            </div>
                            <div class="d-flex mt-3 align-items-center">
                                <span ><b>Email: </b> opportunitybuzz1221@gmail.com </span>
                            </div>
                            <div class="d-flex mt-3 align-items-center">
                                <span ><b>Address: </b> 04, xxx Street State 34789. </span>
                            </div>
                        </div>
                        <div class="col-lg-2 col-sm-6 mt-sm-0 mt-5">
                            <h5>Quick links</h5>
                            <ul class="list-unstyled quick-links">
                                <li>
                                    <a href="/">
                                        <span class="fa fa-play"></span>Home</a>
                                </li>
                                <li>
                                    <a href="/Main">
                                        <span class="fa fa-play"></span>Apply For Job</a>
                                </li>
                                <li>
                                    <a href="/Categories">
                                        <span class="fa fa-play"></span>About</a>
                                </li>
                                <li>
                                    <a href="/About">
                                        <span class="fa fa-play"></span>Contact</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </footer>
            <div class="cpy-right text-center py-4">
                <p class="text-dark">
                    © 2024 Job Recruiter. All rights reserved | Design By Nishant Patel, Parth Patel, Yash Patel. 
                </p>
            </div>
        </>
    )
}
export default Footer;