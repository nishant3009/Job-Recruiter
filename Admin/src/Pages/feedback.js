import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';


function Feedback() {
    const [feedback, setfeedback] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1221/api/feedback")
            .then((res) => setfeedback(res.data));
    }, []);


    return (
        <Layout>
            <div id="page-wrapper">

                <div class="panel-body no-padding">
                    <table class="table table-striped">
                        <thead>
                            <tr class="text-center">
                                <th scope="col">SR NO.</th>
                                <th scope="col">NAME</th>
                                <th scope="col">SUBJECT</th>
                                <th scope="col">CONTACT NO</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">MESSAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback.map((data, index) => (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <th>{data.tc_name}</th>
                                    <th>{data.tc_sub}</th>
                                    <th>{data.tc_num}</th>
                                    <th>{data.tc_email}</th>
                                    <th>{data.tc_msg}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="clearfix"style={{marginBottom:"235px"}} > </div>
                <div class="copy">
                    <p>Copyright &copy; 2023 Modern. All Rights Reserved | Develope by Jayrajsinh Ravalji  </p>
                </div>
            </div>
        </Layout>
    )
}
export default Feedback