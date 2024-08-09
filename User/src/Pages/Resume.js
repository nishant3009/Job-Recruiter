import react, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function Resume() {
    const [filename, setFilename] = useState("");
    let name = useLocation();
    let job = name.state.jobname;

    const Resume1 = (e) => {

        let user = JSON.parse(sessionStorage.getItem('tbl_c_registration'));
        var cname = user.name;
        var cid = user.ID;



        let formdata = new FormData();
        formdata.append("resume", filename);
        formdata.append("Name", cname)
        formdata.append("Job", job)
        formdata.append("id", cid)

        console.log(formdata);

        axios.post("http://localhost:1221/api/resume", formdata, {
            headers: { "Content-Type": "multipart/form-data" }

        }).then(() => {
            window.location = '/Main'
        })

    }

    return (
        <form >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="form-group">
                <div class="my-form">
                    
                    <h5 style={{ marginTop:"-30px" }}><b>Upload Your Resume: </b></h5>
                    <br></br>
                    <label for="exampleInputFile"><b>File input:</b></label>
                    <input type="file" style={{ marginLeft: "5px" }}onChange={(e) => setFilename(e.target.files[0])} />
                    
                    <div class="col-sm-8 col-sm-offset-2" >
                        <button style={{ marginBottom: "-50px" , marginLeft: "-12px"  }} onClick={Resume1} class="btn-success btn">Submit</button>
                    </div>
                </div>
            </div>
        </form>


    )
}
export default Resume;