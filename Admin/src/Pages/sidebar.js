import react, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Sidebar() {
    const [jobcat, setjobcat] = useState([]);
    const [edate, setedate] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1221/api/jobcat")
            .then((res) => setjobcat(res.data));
            axios.get("http://localhost:1221/api/edate")
            .then((res) => {setedate(res.data[0].e_date)});
            
    }, []); 
   const date = new Date().toISOString();
    return (
        <div>

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu" style={{ marginTop: "0px" }}>
                        <li>
                            <a href="/"><i class="fa fa-dashboard fa-fw nav_icon"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="/setdate"><i class="fa fa-bell-o fa-fw nav_icon"></i>Set Date For Vacancy</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-filter nav_icon"></i>Job Categories<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="/add">Add Categories</a>
                                </li>
                                <li>
                                    <a href="/view">View Categories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-book nav_icon"></i>Test Categories<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="/aque">Add Questions</a>
                                </li>
                               <li>
                                    <a href="/vique">View Questions</a>
                                </li>
                            </ul> 
                        </li> 
                        <li>
                            <a href="/feedback"><i class="fa fa-users nav_icon"></i>Feedback Details</a>
                        </li>   
                        { edate <= date ?    <li>
                            <a href="/"><i class="fa fa-folder fa-fw nav_icon"></i>View Resume<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                {jobcat.map((datas) => (
                                    <li>
                                        <a href={`/job/${datas.jc_id}`}>{datas.jc_name}</a>
                                    </li>
                                ))};
                            </ul>
                        </li> : null}
                        {/* <li>
                            <a href="#"><i class="fa fa-envelope nav_icon"></i>Mailbox<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="inbox.html">Inbox</a>
                                </li>
                                <li>
                                    <a href="compose.html">Compose email</a>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default Sidebar