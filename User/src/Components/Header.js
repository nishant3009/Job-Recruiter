import react from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Cookies, useCookies } from "react-cookie";

import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { GrDownload } from "react-icons/gr";
import { MdClose } from "react-icons/md";



function Header() {
    const [signin, showlogin] = useState(true);
    const [username, setUsername] = useState();
    const [reg, showreg] = useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: loginregister, handleSubmit: handleLoginSubmit, formState: { errors: loginerrors } } = useForm();
    const [Cookies, setCookie] = useCookies(["remember"]);
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [response, setResponse] = useState([]);
    const [input, setInput] = useState("");

    const remember = () => {
        setChecked(!checked);
    };
    let user = JSON.parse(sessionStorage.getItem('tbl_c_registration'));
    const clear = () => {
        sessionStorage.clear();
        window.location = '/'
    };
    const Register = (e) => {
        var name = document.getElementById('username').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        var dob = document.getElementById('dob').value
        var address = document.getElementById('address').value
        var contact = document.getElementById('contactno').value
        var gender = document.getElementById('gender').value

        axios.post("http://localhost:1221/api/registration", {
            fname: name,
            Email: email,
            Pass: password,
            Dob: dob,
            Address: address,
            Contact: contact,
            Gender: gender
        });
        window.location = "/";
    }
    const Login = (e) => {

        var name = document.getElementById('lname').value
        var pass = document.getElementById('lpassword').value

        axios.post("http://localhost:1221/api/login", {

            Name: name,
            Password: pass
        }).then((Response) => {
            if (Response.data.message) {
                alert(Response.data.message)
            }
            else {
                let obj = {
                    name: Response.data[0].c_name,
                    email: Response.data[0].c_email,
                    ID: Response.data[0].c_id
                }
                sessionStorage.setItem('tbl_c_registration', JSON.stringify(obj));
                alert("Login Sucessfully")
                window.location = "/";
                if (checked) {
                    setCookie("name", name);
                    setCookie("password", pass);
                }
            }
            window.location = "/";
        })
        //  const transcript = () => {
        //     const conversationdata = document.getElementById("chatbot").textContent;
        //     console.log(conversationdata);
        //     const file = new Blob([conversationdata], {
        //         type: "text/plain",
        //     });
        //     const element = document.createElement("a");
        //     element.href = URL.createObjectURL(file);
        //     element.download = "Your Conversation data" + ".txt";
        //     document.body.appendChild(element);
        //     element.click();
        // };
        // const Chatbot = (e) => {
        //     setInput("");
        //     e.preventDefault();

        //     const conversation = document.getElementById("conversation");
        //     console.log(response);
        //     let msg = document.createElement("div");
        //     if (input != "") {
        //         axios.get("http://localhost:1221/api/chatbot", {
        //             params: { input: input },
        //         })
        //             .then((res) => {

        //                 setResponse(res.data[0].q_response);
        //                 console.log(res.data[0].q_response)
        //                 alert(res.data[0].q_response)

        //                 let rss = res.data[0].q_response;
        //                 const CurerntTime = new Date().toLocaleTimeString([], {
        //                     hour: "2-digit",
        //                     minute: "2-digit"
        //                 });
        //                 if (rss == null) {
        //                     msg.classList.add("chatbot-message", "user-message");
        //                     msg.innerHTML = `<p class="chatbot-text" sentTime="${CurerntTime}">${input}</p>`;
        //                     conversation.appendChild(msg);
        //                     // axios.post("http://localhost:1221/api/newinput", { newinput: input })
        //                     //     .then((res) => { });
        //                     msg = document.createElement("div");
        //                     msg.classList.add("chatbot-message", "chatbot");
        //                     msg.innerHTML = `<p class="chatbot-text" sentTime="${CurerntTime}">Sorry, we could not find your response</p>`;
        //                     conversation.appendChild(msg);
        //                 } else {
        //                     msg.classList.add("chatbot-message", "user-message");
        //                     msg.innerHTML = `<p class="chatbot-text">${input}</p>`
        //                     conversation.appendChild(msg);
        //                     msg = document.createElement("div");
        //                     msg.classList.add("chatbot-message", "chatbot");
        //                     msg.innerHTML = `<p class="chatbot-text">${rss}</p>`
        //                     conversation.appendChild(msg);
        //                 }
        //             })
        //     } else {
        //         const CurerntTime = new Date().toLocaleTimeString([], {
        //             hour: "2-digit",
        //             minute: "2-digit"
        //         });
        //         msg = document.createElement("div");
        //         msg.classList.add("chatbot-message", "chatbot");
        //         msg.innerHTML = `<p class="chatbot-text">Please Write Something.</p>`
        //         conversation.appendChild(msg);


        //     }
        // }

    }


    return (
        <>
            <div class="w3-banner-info-w3ltd position-relative">
                <header>
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light p-0">
                            <h1><Link class="navbar-brand">Job Recruiter  </Link></h1>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="ml-lg-5 navbar-nav mr-lg-auto">
                                    <li class="nav-item   mr-lg-4 mt-lg-0 mt-sm-4 mt-3">
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li class="nav-item mr-lg-4 my-lg-0 mb-sm-4 mb-3">
                                        <Link to="/Main">Apply For job</Link>
                                    </li>

                                    <li class="nav-item  mr-lg-4 mt-lg-0 mt-sm-4 mt-3">
                                        <Link to="/Categories">about</Link>
                                    </li>

                                    <li class="nav-item mr-lg-4 my-lg-0 mb-sm-4 mb-3">
                                        <Link to="/About">contact</Link>
                                    </li>

                                    {/* <div class="w3l-footer" >
                                        <IoChatbubbleEllipsesSharp
                                            color="Black"
                                            size={40}
                                            style={{ position: "fixed", marginLeft: "350px", top: "560px" }}
                                            data-target="#mymodel1" data-toggle="modal"
                                        />
                                    </div> */}

                                </ul>
                                {(user == null) ? <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <button style={{ alignItems: "right" }}
                                        type="button"
                                        class="btn w3ls-btn text-uppercase font-weight-bold d-block"
                                        data-toggle="modal"
                                        aria-pressed="false"
                                        data-target="#exampleModal1">
                                        Register
                                    </button>
                                    <button type="button"
                                        class="btn w3ls-btn btn-2 ml-lg-1 text-uppercase font-weight-bold d-block"
                                        data-toggle="modal"
                                        aria-pressed="false"
                                        data-target="#exampleModal">
                                        Sign in
                                    </button> </div> : <div>
                                    <li style={{ listStyle: "none" }} class="nav-item mr-lg-4 my-lg-0 mb-sm-4 mb-3">
                                        <button type="button" class="btn w3ls-btn btn-2 ml-lg-1 text-uppercase font-weight-bold d-block">
                                            {user.name}
                                        </button>
                                        <div class="dropdown">

                                            <li><Link style={{ color: "black" }} to="/Signin">Profile</Link> </li>
                                            <li><Link style={{ color: "black" }} to="/status">Status</Link> </li>
                                            <li><Link style={{ color: "black" }} onClick={clear}>Logout</Link> </li>

                                        </div>

                                    </li>

                                </div>
                                }
                            </div>
                        </nav>
                    </div>
                </header>

                {reg && (
                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header bg-theme1">
                                    <h5 class="modal-title" id="exampleModalLabel1">Register</h5>
                                    <button type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="#" method="post" class="p-3">
                                        <div class="form-group">
                                            <label for="recipient-name"
                                                class="col-form-label">Username
                                            </label>
                                            <input type="text"
                                                class="form-control"
                                                placeholder="xyz"
                                                name="Name"
                                                id="username"
                                                {...register("Name", { required: "Enter the Username" })}
                                                required="" />
                                            {errors.Name && <span>{errors.Name.message}</span>}
                                        </div>
                                        <div class="form-group">
                                            <label for="recipient-email"
                                                class="col-form-label">
                                                Email
                                            </label>
                                            <input type="email"
                                                class="form-control"
                                                placeholder="xyz@gmail.com"
                                                name="Email"
                                                id="email"
                                                {...register("Email", { required: "email  is mandatory" })}
                                                required="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i" />
                                            {errors.Email && <span>{errors.Email.message}</span>}
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="col-form-label">Password</label>
                                            <div class="input-group">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    class="form-control"
                                                    placeholder="xyz"
                                                    name="Password"
                                                    id="password"
                                                    {...register("Password", { required: "Enter the Password" })}
                                                    required="" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text">
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => setShowPassword(!showPassword)}
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            {errors.Password && <span>{errors.Password.message}</span>}
                                        </div>
                                        <div class="form-group">
                                            <label for="dob"
                                                class="col-form-label">
                                                Date of Birth
                                            </label>
                                            <input type="date"
                                                class="form-control"
                                                placeholder=" "
                                                name="dob"
                                                id="dob"
                                                {...register("dob", { required: "Enter the Date of Birth" })}
                                                required="" />
                                            {errors.dob && <span>{errors.dob.message}</span>}
                                        </div>
                                        <div class="sub-w3ltd">
                                            <input type="radio"
                                                value="Male"
                                                id="gender"
                                                required=""
                                                {...register("gender", { required: "Select gender" })}
                                            />
                                            <label for="male"
                                                class="mb-3 text-dark">
                                                <span>Male</span>
                                            </label>

                                            <input type="radio"
                                                style={{ marginLeft: "10px" }}
                                                value="Female"
                                                id="gender"
                                                {...register("gender", { required: "Select gender" })}
                                                required=""
                                            />
                                            <label for="female"
                                                class="mb-3 text-dark">
                                                <span>Female</span>
                                            </label>
                                            <br />
                                            {errors.gender && <span>{errors.gender.message}</span>}
                                        </div>
                                        <div class="form-group">
                                            <label for="Address"
                                                class="col-form-label">Address
                                            </label>
                                            <input type="Address"
                                                class="form-control"
                                                placeholder=" 04,xxx Street State 34789"
                                                name="Address"
                                                id="address"
                                                {...register("Address", { required: "Enter the Address" })}
                                                required="" />
                                            {errors.Address && <span>{errors.Address.message}</span>}
                                        </div>
                                        <div class="form-group">
                                            <label for="Contact No"
                                                class="col-form-label">
                                                Contact No
                                            </label>
                                            <input type="number"
                                                class="form-control"
                                                title='Error Message'
                                                name="Contact No"
                                                id="contactno"
                                                placeholder='xxxx'
                                                pattern="[0-9]{10}"
                                                {...register("Contact", { required: "Enter the Contact Number" })}
                                                required="" />
                                            {errors.Contact && <span>{errors.Contact.message}</span>}
                                        </div>
                                        <div class="right-w3l">
                                            <input type="button"
                                                onClick={handleSubmit(Register)}
                                                class="form-control bg-theme"
                                                value="Register"
                                                id='submit' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {signin && (
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header bg-theme1">
                                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="p-3" >
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label">Username</label>
                                            <input type="text"
                                                id="lname"
                                                name="Name"
                                                class="form-control"
                                                placeholder=" Enter Your Username"
                                                {...loginregister("lname", { required: "Please enter Username", })}
                                                onChange={(e) => setUsername(e.target.value)}
                                                required="" />
                                            {loginerrors.lname && <span>{loginerrors.lname.message}</span>}
                                        </div>
                                        <div class="form-group">
                                            {username === Cookies.name ? (
                                                <>
                                                    <label for="password" class="col-form-label">Password</label>
                                                    <input type="password"
                                                        class="form-control"
                                                        placeholder="Enter Your Password"
                                                        name="Password"
                                                        id="lpassword"
                                                        value={Cookies.password}
                                                        required=""
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <label for="password" class="col-form-label">Password</label>
                                                    <input type="password"
                                                        class="form-control"
                                                        name="Password"
                                                        id="lpassword"
                                                        placeholder="Enter Your Password "
                                                        required=""
                                                        {...loginregister("lpassword", {
                                                            required: "Please Enter Password",
                                                        })}
                                                    />
                                                    {loginerrors.lpassword && <span>{loginerrors.lpassword.message}</span>}
                                                </>
                                            )}
                                        </div>
                                        <div class="right-w3l">
                                            <input type="button"
                                                onClick={handleLoginSubmit(Login)}
                                                class="form-control bg-theme"
                                                value="Login"
                                                id='submit' />
                                        </div>
                                        <div class="row sub-w3l my-3">
                                            <div class="col sub-w3ltd">
                                                <input type="checkbox"
                                                    id="checkbox"
                                                    value=""
                                                    onChange={remember} />
                                                <label for="brand1"
                                                    class="text-dark">
                                                    <span></span>Remember me
                                                </label>
                                            </div>
                                            <div class="col forgot-w3l text-right" >
                                                <Link to="/forgot" class="text-dark">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <p class="text-center dont-do">Don't have an account?
                                            <a href=""
                                                to="#"
                                                data-toggle="modal"
                                                data-target="#exampleModal1"
                                                class="text-dark"
                                                onClick={() => { showlogin(!signin); showreg(true) }}>
                                                <strong>Registration Now</strong></a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            {/* <div
                id="mymodel1"
                class="modal chatbot-container"
                role="dialog"
                style={{
                    height: "500px",
                    width: "36%",
                    left: "64%",
                    textAlign: "left",
                    backgroundColor: "white",
                }}
             >
                <div id="header">
                    <h4 style={{ fontSize: "15px" }}>
                        Chatbox
                        <MdClose
                            size={20}
                            style={{ float: "right", marginLeft: "20px" }}
                            data-dismiss="modal"
                        />
                        <GrDownload
                            size={17}
                            style={{ float: "right" }}
                            data-dismiss="modal"
                            onClick={transcript}
                        />
                    </h4>
                </div>
                <div id="chatbot">
                    <div id="conversation">
                        <div class="chatbot-message">
                            <p class="chatbot-text">Hi! 👋 it''s great to see you!</p>
                        </div>
                    </div>
                    <form id="input-form">
                        <message-container>
                            <input
                                id="input-field"
                                type="text"
                                placeholder="Type your message here"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button id="submit-button" type="submit" onClick={Chatbot}>
                                <FiSend class="send-icon" onClick={() => setInput("")} />
                            </button>
                        </message-container>
                    </form>
                </div>
            </div> */}
        </>
    )
}
export default Header


// }