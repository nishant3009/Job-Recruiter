import react, { useEffect, useRef, useState } from 'react';
import Layout from '../Components/Layout';
import axios from 'axios';
import { formatDate } from 'date-fns';
// import {format} from 'date-fns';
function Main() {
    const [user, setuser] = useState([]);
    const [countresume, setcountresume] = useState([]);
    const [countjobcat, setcountjobcat] = useState([]);
    const [date, setdate] = useState([]);
    const [list, setlist] = useState([]);
    const [question, setquestions] = useState([]);
    const [feedback, setfeedback] = useState([]);




    useEffect(() => {
        axios.get("http://localhost:1221/api/usercount")
            .then((res) => setuser(res.data[0].count));
        axios.get("http://localhost:1221/api/resumecount")
            .then((res) => setcountresume(res.data[0].count));
        axios.get("http://localhost:1221/api/datedisplay")
            .then((res) => setdate(formatDate(res.data[0].e_date)));
        axios.get("http://localhost:1221/api/jobcatcount")
            .then((res) => setcountjobcat(res.data[0].count));
        axios.get("http://localhost:1221/api/questionscount")
            .then((res) => setquestions(res.data[0].count));
        axios.get("http://localhost:1221/api/feedbackcount")
            .then((res) => setfeedback(res.data[0].count));
    }, []);

    const formatDate = (dateString) => {
        const isoDate = new Date(dateString);
        const day = isoDate.getDate().toString().padStart(2, '0');
        const month = (isoDate.getMonth() + 1).toString().padStart(2, '0');
        const year = isoDate.getFullYear().toString();
        return `${day}/${month}/${year}`;
    };



    return (
        <Layout>
            <div id="page-wrapper">

                <div class="col-md-6 span_6" style={{ marginLeft: "300px", marginTop: "20px" }} >
                    <div class="box"   >
                        <br></br>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info">
                                <div class="tiles-head red1">
                                    <div class="text-center">User</div>
                                </div>
                                <div class="tiles-body red">{user}&nbsp;</div>
                            </a>
                        </div>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info tiles_blue">
                                <div class="tiles-head tiles_blue1">
                                    <div class="text-center">Uploaded Resume</div>
                                </div>
                                <div class="tiles-body blue1">
                                    {countresume}&nbsp;
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="box" style={{ marginTop: "12px" }}>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info">
                                <div class="tiles-head fb1">
                                    <div class="text-center" >End date</div>
                                </div>
                                <div class="tiles-body fb2" >
                                    {date}&nbsp;
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info tiles_blue">
                                <div class="tiles-head tw1">
                                    <div class="text-center">Job Categories</div>
                                </div>
                                <div class="tiles-body tw2">
                                    {countjobcat}&nbsp;
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <br></br>
                    <div class="box"  style={{ marginTop: "-33px" }} >
                        <br></br>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info">
                                <div class="tiles-head red1">
                                    <div class="text-center">Mcq Test Questions</div>
                                </div>
                                <div class="tiles-body red">{question}&nbsp;</div>
                            </a>
                        </div>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info tiles_blue">
                                <div class="tiles-head tiles_blue1">
                                    <div class="text-center">Feedback</div>
                                </div>
                                <div class="tiles-body blue1">
                                    {feedback}&nbsp;
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                        <br></br>

                    </div>
                    {/* <div class="box" style={{ marginTop: "-12px" }}>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info ">
                                <div class="tiles-head fb1">
                                    <div class="text-center" >Mcq Test Questions</div>
                                </div>
                                <div class="tiles-body fb2" >
                                    {question}&nbsp;
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 col_1_of_2 span_1_of_2">
                            <a class="tiles_info tiles_blue">
                                <div class="tiles-head tw2">
                                    <div class="text-center">Feedback</div>
                                </div>
                                <div class="tiles-body tw2">
                                    {feedback}&nbsp;
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                        <br></br>
                    </div> */}
                </div>
                <div class="clearfix" style={{ marginBottom: "92px" }}> </div>
                <div class="copy">
                    <p>Copyright &copy; 2023 Modern. All Rights Reserved | Develope by Jayrajsinh Ravalji  </p>
                </div>

            </div>
        </Layout>

    )
}
export default Main