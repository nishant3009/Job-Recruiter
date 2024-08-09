import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Status() {
    let user = JSON.parse(sessionStorage.getItem('tbl_c_registration'));
    var cid = user.ID;
    const [Status, setStatus] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:1221/api/status", { params: { id: cid } })
            .then((res) => { setStatus(res.data) });
    }, []);


    return (
        <div class="content_bottom" >
            <br />
            <br />
            <br />

            <div class="col-md-12 span_6">
                <div class="bs-example1" data-example-id="contextual-table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>SR NO</th>
                                <th>Job Category</th>
                                <th>Status</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Venue</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Status.map((datas, index) => {


                                const isoDate = new Date(datas.si_date);
                                const day = isoDate.getDate().toString().padStart(2, '0');
                                const month = (isoDate.getMonth() + 1).toString().padStart(2, '0');
                                const year = isoDate.getFullYear().toString();
                                const formatDate = `${day}/${month}/${year}`;


                                return (
                                    <tr class="active">
                                        <th scope="row">{index + 1}</th>

                                        <td>{datas.jc_name}</td>
                                        {datas.state == 0 ? <td>Initial Round</td>
                                            : datas.state == 1 ? <td>First Round</td>
                                            : datas.state == 2 ? <td>Interview Round</td>
                                            : datas.state == 3 ? <td>Selected</td>
                                            : datas.state == 4 ? <td>Rejected</td>
                                            : <td></td>
                                        }
                                        <td>{datas.si_time}</td>
                                        <td>{formatDate}</td>
                                        <td>{datas.si_venue}</td>
                                        <td>{datas.remark}</td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Status;

