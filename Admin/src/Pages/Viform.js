import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdDelete, MdEdit } from "react-icons/md"
import Layout from '../Components/Layout';
import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css';

function Viform() {
    const [cat, setCat] = useState([]);
    const [edits, setEdits] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1221/api/viform")
            .then((res) => setCat(res.data));
    }, []);

    const Delete = (id) => {
        confirmAlert({
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post("http://localhost:1221/api/delform", { id: id })
                        window.location.reload();
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    const Edit = (id) => {
        axios.post("http://localhost:1221/api/editcat", { id: id }).then((resp) => {
            setEdits(resp.data);
        }, []);
    };

    const Update = () => {

        const catname = document.getElementById("catname").value;
        const catid = document.getElementById("cid").value;
        axios
            .post("http://localhost:1221/api/updatecat", {
                id: catid,
                Catname: catname,
            })
        window.location.reload()
    };

    const closemodal = () => {
        window.location = '/view';
    }
    return (
        <Layout>
            <div id="page-wrapper">
                <div class="panel-body no-padding">
                    <table class="table table-striped" >
                        <thead>
                            <tr class="text-center">
                                <th scope="col">SR NO.</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {cat.map((data, index) => (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <th>{data.jc_name}</th>
                                    <th>
                                    <td>
                                        <button
                                            class="btn btn-primary"
                                            data-target="#myModal1"
                                            data-toggle="modal"
                                            onClick={(e) => Edit(data.jc_id)}
                                        >
                                            <MdEdit size={20} />
                                        </button>

                                    </td>
                                    <td>
                                        <button class="btn btn-danger ml-1">
                                            <MdDelete size={20} onClick={(e) => Delete(data.jc_id)} />
                                        </button>
                                    </td>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="clearfix" style={{ marginBottom: "189px" }}> </div>
                <div class="copy">
                    <p>Copyright &copy; 2023 Modern. All Rights Reserved | Develope by Jayrajsinh Ravalji  </p>
                </div>
            </div>
            
            <div id="myModal1" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button"
                                class="close"
                                data-dismiss="modal"
                                style={{ color: "blue" }}>&times;
                            </button>
                        </div>
                        <div class="modal-body">
                            {edits.map((vals) => {
                                return (
                                    <>
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title" style={{ textAlign: 'center' }}>Edit Categories</h4>

                                                <div class="basic-form">
                                                    <input type="text"
                                                        value={vals.jc_id}
                                                        id="cid"
                                                        hidden
                                                    />
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <br></br>
                                                            <label>Name:</label>
                                                            <input type="text"
                                                                defaultValue={vals.jc_name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                id="catname"

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                                data-dismiss="modal"
                                                onClick={closemodal}
                                                style={{ width: "70px", height: "40px", backgroundColor: "blue", color: "white" }}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-primary"
                                                data-dismiss="modal"
                                                onClick={Update}
                                                style={{ width: "70px", height: "40px", backgroundColor: "blue", color: "white" }}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </>
                                );
                            })}

                        </div>
                    </div>
                </div>
                
            </div>

        </Layout>
    )
}
export default Viform