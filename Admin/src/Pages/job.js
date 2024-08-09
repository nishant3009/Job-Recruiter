import react, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Components/Layout";
import { MdCheckCircle, MdDelete } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import { useParams } from "react-router-dom";

function Job() {
    const [cat, setCat] = useState([]);
    const [Name, setName] = useState([]);
    const [Time, setTime] = useState([]);
    const [Dates, setDate] = useState([]);
    const [Venue,setVenue] = useState([]);
    const [hrn, hrname] = useState([]);
    const [cid, setCid] = useState([]);

    const { name } = useParams();
    useEffect(() => {
        axios
            .get("http://localhost:1221/api/upresume", { params: { name: name } })
            .then((res) => { setCat(res.data) });
    }, [name]);

    const Accept = (id,cid) => {
        window.location.reload()
        axios.post("http://localhost:1221/api/accept", { id: id, cid:cid});

    };

    const sethr = (id,cid) => {
        hrname(id)
        setCid(cid)
    };

    const AcceptHR = (id,cid) => {
        window.location.reload()
        var Cname = document.getElementById('cname').value
        axios.post("http://localhost:1221/api/accepthr", { 
        id: id, Time: Time, cid:cid,
        Dates: Dates, Venue: Venue,
        Cname:Cname 
    });
};

    const AcceptFinal = (id,cid) => {
        window.location.reload()
        axios.post("http://localhost:1221/api/acceptfinal", { id: id, cid:cid});

    };

    const [rsid, setrsid] = useState()
    const [canid, setCanid] = useState();
    const Delete = (id,cid) => {
        setrsid(id)
        setCanid(cid)
    };

    const remark = (id,cid) => {
        axios.post("http://localhost:1221/api/delresume", { Name: Name, id: id,cid:cid});
        window.location.reload();
    };

    const closemodal = () => {
        window.location = '/job';
    };

    return (
        <Layout>
            <div id="page-wrapper" style={{ height: "1450px" }}>
                <div class="col-md-6 span_8">
                    <div class="activity_box">
                        <div class="activity-row">
                            <div class="panel-body no-padding" style={{ display: "block" }}>
                                <h4 class="text-center">INITIAL</h4>
                                <div class="scrollbar" id="style-2">
                                    <div
                                        class="panel-body no-padding"
                                        style={{ display: "block" }}
                                    >
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="warning">
                                                    <th>Sr No.</th>
                                                    <th>Candidate Name</th>

                                                    <th>Upload Date</th>
                                                    <th>Data</th>
                                                    <th> Actiion</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cat.map((datas) => (
                                                    datas.state === 0 ? (


                                                        <>
                                                            <tr>
                                                                <th scope="row">{datas.r_id}</th>
                                                                <th scope="row">{datas.c_name}</th>
                                                                <th scope="row">
                                                                    {new Date(datas.r_date).toDateString()}
                                                                </th>
                                                                <th>
                                                                    <a href={"http://localhost:1221/public/" + datas.up_resume} target='_blank'>View Resume</a>
                                                                </th>
                                                                <td>
                                                                    <button
                                                                        class="btn btn-ptimary"
                                                                        data-target='#myModal1'
                                                                        data-toggle='modal'
                                                                        id="delete"
                                                                        onClick={(e) => Delete(datas.r_id,datas.c_id)}
                                                                    >
                                                                        <MdDelete size={20} />
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        class="btn btn-ptimary"
                                                                        onClick={(e) => Accept(datas.r_id,datas.c_id)}
                                                                    >
                                                                        <MdCheckCircle size={20} />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    ) : null
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 span_8">
                    <div class="activity_box">
                        <div class="activity-row">
                            <div class="panel-body no-padding" style={{ display: "block" }}>
                                <h4 class="text-center">FIRST ROUND</h4>
                                <div class="scrollbar" id="style-2">
                                    <div
                                        class="panel-body no-padding"
                                        style={{ display: "block" }}
                                    >
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="warning">
                                                    <th>Sr No.</th>
                                                    <th>Candidate Name</th>

                                                    <th>Upload Date</th>
                                                    <th>Data</th>
                                                    <th> Actiion</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cat.map((datas) => (
                                                    datas.state === 1 ? (
                                                        <>
                                                            <tr>
                                                                <th scope="row">{datas.r_id}</th>
                                                                <th scope="row">{datas.c_name}</th>
                                                                <th scope="row">
                                                                    {new Date(datas.r_date).toDateString()}
                                                                </th>
                                                                <th>
                                                                    <a
                                                                        href={
                                                                            "http://localhost:1221/public/" +
                                                                            datas.up_resume
                                                                        }
                                                                        target="_blank"
                                                                    >
                                                                        View Resume
                                                                    </a>
                                                                </th>
                                                                <td>
                                                                    <button
                                                                        class="btn btn-ptimary"
                                                                        data-target='#myModal1'
                                                                        data-toggle='modal'
                                                                        id="delete"
                                                                        onClick={(e) => Delete(datas.r_id,datas.c_id)}
                                                                    >
                                                                        <MdDelete size={20} />
                                                                    </button>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        class="btn btn-ptimary"
                                                                        data-target='#myModal2'
                                                                        data-toggle='modal'
                                                                        onClick={(e) => sethr(datas.r_id,datas.c_id)}
                                                                    >
                                                                        <MdCheckCircle size={20} />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <input 
                                                            type="text" 
                                                            value={datas.c_name} 
                                                            hidden id="cname"/>
                                                        </>
                                                    ) : null
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 span_8">
                    <div class="activity_box">
                        <div class="activity-row">
                            <div class="panel-body no-padding" style={{ display: "block" }}>
                                <h4 class="text-center">HR ROUND</h4>
                                <div class="scrollbar" id="style-2">
                                    <div
                                        class="panel-body no-padding"
                                        style={{ display: "block" }}
                                    >
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="warning">
                                                    <th>Sr No.</th>
                                                    <th>Candidate Name</th>
                                                    <th>Upload Date</th>
                                                    <th>Data</th>
                                                    <th> Actiion</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cat.map((datas) => (
                                                    datas.state === 2 ? (
                                                        <tr>
                                                            <th scope="row">{datas.r_id}</th>
                                                            <th scope="row">{datas.c_name}</th>
                                                            <th scope="row">
                                                                {new Date(datas.r_date).toDateString()}
                                                            </th>
                                                            <th>
                                                                <a
                                                                    href={
                                                                        "http://localhost:1221/public/" +
                                                                        datas.up_resume
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    View Resume
                                                                </a>
                                                            </th>
                                                            <td>
                                                                <button
                                                                    class="btn btn-ptimary"
                                                                    data-target='#myModal1'
                                                                    data-toggle='modal'
                                                                    onClick={(e) => Delete(datas.r_id,datas.c_id)}
                                                                >
                                                                    <MdDelete size={20} />
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    class="btn btn-ptimary"
                                                                    onClick={(e) => AcceptFinal(datas.r_id,datas.c_id)}
                                                                >
                                                                    <MdCheckCircle size={16} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ) : null
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 span_8">
                    <div class="activity_box">
                        <div class="activity-row">
                            <div class="panel-body no-padding" style={{ display: "block" }}>
                                <h4 class="text-center">FINAL LIST</h4>
                                <div class="scrollbar" id="style-2">
                                    <div
                                        class="panel-body no-padding"
                                        style={{ display: "block" }}
                                    >
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="warning">
                                                    <th>Sr No.</th>
                                                    <th>Candidate Name</th>
                                                    <th>Upload Date</th>
                                                    <th>Data</th>
                                                    {/* <th> Actiion</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cat.map((datas) => (
                                                    datas.state === 3 ? (
                                                        <tr>
                                                            <th scope="row">{datas.r_id}</th>
                                                            <th scope="row">{datas.c_name}</th>
                                                            <th scope="row">
                                                                {new Date(datas.r_date).toDateString()}
                                                            </th>
                                                            <th>
                                                                <a
                                                                    href={
                                                                        "http://localhost:1221/public/" +
                                                                        datas.up_resume
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    View Resume
                                                                </a>
                                                            </th>

                                                            {/* <td>
                                                                <button
                                                                    class="btn btn-ptimary"
                                                                    onClick={(e) => datas.r_id}
                                                                >
                                                                    <MdCheckCircle size={16} />
                                                                </button>
                                                            </td> */}
                                                        </tr>
                                                    ) : null
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 span_8">
                    <div class="activity_box">
                        <div class="activity-row">
                            <div class="panel-body no-padding" style={{ display: "block" }}>
                                <h4 class="text-center">REJECTED</h4>
                                <div class="scrollbar" id="style-2">
                                    <div
                                        class="panel-body no-padding"
                                        style={{ display: "block" }}
                                    >
                                        <table class="table table-striped">
                                            <thead>
                                                <tr class="warning">
                                                    <th>Sr No.</th>
                                                    <th>Candidate Name</th>
                                                    <th>Upload Date</th>
                                                    <th>Data</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cat.map((datas) => (
                                                    datas.state === 4 ? (
                                                        <tr>
                                                            <th scope="row">{datas.r_id}</th>
                                                            <th scope="row">{datas.c_name}</th>
                                                            <th scope="row">
                                                                {new Date(datas.r_date).toDateString()}
                                                            </th>
                                                            <th>
                                                                <a
                                                                    href={
                                                                        "http://localhost:1221/public/" +
                                                                        datas.up_resume
                                                                    }
                                                                    target="_blank"
                                                                >
                                                                    View Resume
                                                                </a>
                                                            </th>

                                                        </tr>
                                                    ) : null
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="myModal1" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title"></h4>
                            <button type="button"
                                class="close"
                                data-dismiss="modal"
                                style={{ color: "blue" }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <>
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Remark</h4>
                                        <div class="basic-form " >
                                            <input type="text"
                                                onChange={(e) => setName(e.target.value)}
                                                style={{ width: "550px", height: "100px" }}
                                                id="cid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                        <div class="modal-footer">
                            <button type="button"
                                class="btn btn-default"
                                data-dismiss="modal"
                                onClick={(e) => remark(rsid,canid)}
                                style={{ width: "70px", height: "40px", backgroundColor: "blue", color: "white" }} >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Candidate Scheduling Interview with HR*/}

            <div id="myModal2" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title"></h4>
                            <button type="button"
                                class="close"
                                data-dismiss="modal"
                                style={{ color: "blue" }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <>
                                <div class="card">
                                    <div class="card-body">

                                        <h4 class="card-title" 
                                            style={{ textAlign: 'center' }}>
                                            Scheduling Interview
                                        </h4>
                                        <br></br>
                                        <div class="basic-form ">
                                            <label><b>Date:</b></label>
                                            <input
                                                type="date"
                                                onChange={(e) => setDate(e.target.value)}
                                                style={{ width: "120px", height: "20px", marginLeft: "5px" }}
                                                id="cdate"
                                            />
                                            <label style={{ marginLeft: '20px' }}><b>Time:</b></label>
                                            <input
                                                type="time"
                                                onChange={(e) => setTime(e.target.value)}
                                                style={{ width: "120px", height: "20px", marginLeft: "5px" }}
                                                id="cid"
                                            />
                                            <label  style={{ marginLeft: '20px' }}><b>Venue:</b></label>
                                            <input
                                                type="text"
                                                onChange={(e) => setVenue(e.target.value)}
                                                style={{ width: "90px", height: "20px", marginLeft: "5px" }}
                                                id="cid"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </>
                        </div>
                        <div class="modal-footer">
                            <button type="button"
                                class="btn btn-default"
                                data-dismiss="modal"
                                onClick={(e) => AcceptHR(hrn,cid)}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    backgroundColor: "blue",
                                    color: "white"
                                }} >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Selcted Candidate in HR Round */}
            {/* <div id="myModal2" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title"></h4>
                            <button type="button"
                                class="close"
                                data-dismiss="modal"
                                style={{ color: "blue" }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <>
                                <div class="card">
                                    <div class="card-body">

                                        <h4 class="card-title" style={{ textAlign: 'center' }}>Scheduling Interview</h4>
                                        <br></br>
                                        <div class="basic-form ">
                                            <label><b>Date:</b></label>
                                            <input
                                                type="date"
                                                style={{ width: "120px", height: "20px", marginLeft: "5px" }}
                                                id="cdate"
                                            />
                                            <label style={{ marginLeft: '20px' }}><b>Time:</b></label>
                                            <input
                                                type="time"
                                                style={{ width: "90px", height: "20px", marginLeft: "5px" }}
                                                id="cid"
                                            />
                                            <label class="dropdown" style={{ marginLeft: '20px' }}><b>Venue:</b></label>
                                            <input
                                                type="text"
                                                style={{ width: "90px", height: "20px", marginLeft: "5px" }}
                                                id="cid"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </>
                        </div>
                        <div class="modal-footer">
                            <button type="button"
                                class="btn btn-default"
                                data-dismiss="modal"
                                onClick={(e) => AcceptHR(hrn)}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    backgroundColor: "blue",
                                    color: "white"
                                }} >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

        </Layout>
    )
}
export default Job;