import React from "react";
import axios from "axios";
//import { Link} from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

function Form() {

  // const history = useNavigate();
  const Form1 = (e) => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.post("http://localhost:1221/api/form", {
      Email: email,
      Password: password,

    })
      .then((response) => {
        if (email === "" && password === "") {
          alert("Please Enter all details");
        } else if (response.data.message) {
          alert(response.data.message);
          // alert(response.data.message);
        } else {
          let obj = {
            email: response.data[0].a_email,
            id: response.data[0].a_id,
          };
          sessionStorage.setItem("tbl_a_login", JSON.stringify(obj));

          // window.location = "/";

          // history("/home");
          window.location = "/";
        }
      });
  }

  return (


    <body id="login">
      <div class="login-logo">
      </div>
      <h2 class="form-heading"  style={{marginTop:"40px"}}>login</h2>
      <div class="app-cam">
        <form >
          <div class="form-group">
            <label><b>Email address :</b></label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email *"
              id="email"
              required=""
            />
          </div>
          <div class="form-group">
            <label><b>Password : </b></label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter password *"
              id="password"
              required=""
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary error-w3l-btn mt-sm-5 mt-3 px-4"
              onClick={Form1}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </body>

  );
}
export default Form;