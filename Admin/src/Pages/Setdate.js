import react, { useEffect, useRef, useState } from 'react';
import Layout from '../Components/Layout';
// import {format} from 'date-fns';

import axios from 'axios';
import { formatDate } from 'date-fns';
function Setdate() {

    const [list, setlist] = useState([]);
    const Date = (e) => {
        window.location = '/'
        var sdate = document.getElementById('startdate').value;
        var edate = document.getElementById('enddate').value;
        axios.post("http://localhost:1221/api/date", {

            Sdate: sdate,
            Edate: edate

        });
    }
    // {    
    //     list.map((val) => {
    //         function formatDate(dataString) {
    //             const isoDate = new Date(dataString);
    //             const days = isoDate.getDate().toString().padStart(2, '0');
    //             const month = (isoDate.getMonth() + 1).toString().padStart(2, '0');
    //             const year = isoDate.getFullYear().toString().slice();
    //             return `${days}-${month}-${year}`;
    //         }
    //     })
    // }
    // const formattedSDate = formatDate(val.s_date);
    // const formattedEDate = formatDate(val.e_date);
    return (
        <Layout>
            <div id="page-wrapper">

                <div class="well1 white">
                    <div class="col-md-6 col-md-offset-3 inbox_center" style={{ marginTop: "40px" }}>
                        <div class="Set Date">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    Set Dates for Job vacancy
                                </div>

                                <label><b>Enter Start Date :</b> </label>
                                <input type="date"
                                    class="form-control1 control3"
                                    name="sdate"
                                    id="startdate"
                                    required=""
                                />
                                <label><b>Enter End Date : </b> </label>
                                <input type="date"
                                    class="form-control1 control3"
                                    name="edate"
                                    id="enddate"
                                    required=""
                                />
                                <div >
                                    <button onClick={Date}
                                        type="submit"
                                        class="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="clearfix" style={{ marginBottom: "239px" }}> </div>
                <div class="copy">
                    <p>Copyright &copy; 2023 Modern. All Rights Reserved | Develope by Jayrajsinh Ravalji  </p>
                </div>

            </div>
        </Layout>

    );
}
export default Setdate