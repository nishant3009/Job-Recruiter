import React from 'react';
import axios from 'axios';
function FOpass() {
    const FOpass = (e) => {
        
        var name = document.getElementById('fpass').value
       
        axios.post("http://localhost:1221/api/forgot", {
            Email: name
        })
            .then((resp) => {
                alert(resp.data.message)
                window.location = '/' 
            });
          
    }
    return (

        <form>
            <div class="form-group">
                <br></br>
                <br></br>
                <div class="my-form1">
                <h5 style={{ marginTop:"-50px" }}><b>Forgot Password </b></h5>
                <br></br>
                    <div>
                        <label class="control-label" ><b>Enter Email</b>:</label>
                        <br></br>
                        <input type="text"
                            class="form-control1 ng-invalid ng-invalid-required ng-touched"
                            id='fpass'
                            ng-model="model.name"
                            required=""
                        />
                    </div>
                    <br></br>
                    <div >
                        <button onClick={FOpass} class="btn btn-primary">Submit</button>
                    </div>
                </div>
                <br></br>
            </div>
        </form>
    )
}
export default FOpass