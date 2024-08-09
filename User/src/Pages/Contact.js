import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Contact()
{
    const contact=(e)=>{ 
        var name=document.getElementById('fname').value
        var subject=document.getElementById('sub').value
        var contact=document.getElementById('number').value 
        var email=document.getElementById('Email').value
        var msg=document.getElementById('text').value
        

        axios.post("http://localhost:1221/api/contact",{
        Name: name,
        Sub: subject,
        Contact: contact,
        Email: email,
        Message: msg
        
    });
      
        
    }
        
    return(
        <section class="contact-w3pvt">
             <div class="inner-banner-w3ls">
                </div>
             <nav aria-label="breadcrumb" />
                <ol class="breadcrumb d-flex justify-content-center bg-theme">
                    <li class="breadcrumb-item">
                        <a href="/" class="text-white" > Home</a>
                    </li>
                    <li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Contact </li>
                </ol>
        <div class="container py-md-5">
            <div class="address-w3layouts">
                <div class="title-sec-w3layouts_pvt text-center">
                    <h4 class="w3layouts_pvt-head" style={{ marginTop:"-25px" }}>our contact info</h4>
                </div>
                <div class="row py-md-5 pt-4">
                    <div class="col-lg-4">
                        <div class="row fv3-contact">
                            <div class="col-4  text-center">
                                <span class="fa fa-envelope-open ml-2"></span>
                            </div>
                            <div class="col-8">
                                <a href="mailto:example@email.com" class="d-block text-secondary">opportunitybuzz1221@gmail.com</a>
            
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 my-lg-0 my-4">
                        <div class="row  fv3-contact">
                            <div class="col-4 my-2 text-center">
                                <span class="fa fa-phone ml-2"></span>
                            </div>
                            <div class="col-8">
                                <p>+456 123 7890</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row fv3-contact">
                            <div class="col-4  text-center">
                                <span class="fa fa-home ml-2"></span>
                            </div>
                            <div class="col-8">
                                <p> 04,
                                    xxx Street State 34789.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="row">
                <div class="col-12 mx-auto">
            
                    <div class="register-top1 py-lg-3">
                        <div class="title-sec-w3layouts_pvt text-center">
                            <h4 class="w3layouts_pvt-head" style={{ marginTop:"-30px" }}>How Can We Help You?</h4>
                        </div>
                        <form class="register-wthree pt-md-5 pb-md-0 py-4">
                            <div class="form-group">
                                <div class="row" style={{ marginTop:"-10px" }}>
                                    <div class="col-md-6">
                                        <label>
                                            Full name
                                        </label>
                                        <input class="form-control" type="text" placeholder="Johnson" name="email" id='fname'required=""/>
                                    </div>
                                    <div class="col-md-6 mt-md-0 mt-4">
                                        <label>
                                            Subject
                                        </label>
                                        <input class="form-control" type="text" placeholder="Kc" name="name" id='sub' required=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>
                                            Contact No
                                        </label>
                                        <input class="form-control" type="number" placeholder="xxxx xxxxx" name="number"
                                           id='number' maxLength="10" required="" />
                                    </div>
                                    <div class="col-md-6 mt-md-0 mt-4">
                                        <label>
                                            Email
                                        </label>
                                        <input class="form-control" type="text" placeholder="example@email.com" name="email"
                                            id='Email' required=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>
                                            Your message
                                        </label>
                                        <textarea placeholder="Type your message here" class="form-control" id='text'></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <button onClick={contact} class="btn btn-agile btn-block w-100 font-weight-bold text-uppercase bg-theme">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="border-pos-wthree border-exp"></div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Contact