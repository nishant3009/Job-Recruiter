import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';
import { MdDelete, MdEdit } from "react-icons/md"
import { confirmAlert } from "react-confirm-alert"

function Viewque() {
    const [cat, setCat] = useState([]);
    const [edits, setEdits] = useState([]);
    const [name, setName] = useState([]);
    const [subject, setSubject] = useState([])
    useEffect(() => {
        axios.get("http://localhost:1221/api/fetchsubjects")
            .then((res) => setSubject(res.data));
    }, []);
    useEffect(() => {
        axios.get("http://localhost:1221/api/Viewque")
            .then((res) => setCat(res.data));
    }, []);
    const Edit = (id) => {
        axios.post("http://localhost:1221/api/editque", { id: id }).then((resp) => {
            setEdits(resp.data);
        }, []);
    };
    const Update = (id) => {
        const mcqid = document.getElementById('mcqid').value
        const subid = document.getElementById('subid').value
        //const subname = document.getElementById('subname').value
        // const subject = document.getElementById('subject').value
        // alert(subject)
        const qname = document.getElementById('question').value
        const option1 = document.getElementById('op1').value
        const option2 = document.getElementById('op2').value
        const option3 = document.getElementById('op3').value
        const option4 = document.getElementById('op4').value
        const answer = document.getElementById('answer').value

        axios.post("http://localhost:1221/api/updateque", {
            mcqid: mcqid,
            subid: subid,
            //subname: subname,
            //subject: subject,
            question: qname,
            op1: option1,
            op2: option2,
            op3: option3,
            op4: option4,
            answer: answer,
        });
        window.location.reload()
    }

    const closemodal = () => {
        window.location = '/viewque';
    }
    const Delete = (id) => {
        confirmAlert({
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.post("http://localhost:1221/api/delque", { id: id })
                        window.location.reload();
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
    };

    return (
        <Layout>
        <div id="page-wrapper">
            <div class="panel-body no-padding" style={{ display: "block"}}>
                <table class="table table-striped" style={{  marginLeft:"-15px" , marginTop:"-14px"  }}>
                    <thead>
                        <tr class="warning">
                            <th>Sr No.</th>
                            <th>Subjects</th>
                            <th>Question</th>
                            <th>Option1</th>
                            <th>Option2</th>
                            <th>Option3</th>
                            <th>Option4</th>
                            <th>Answer</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {cat.map((datas,index) => (
                            <tr>
                                <th scope='row'>
                                    {index + 1}
                                </th>
                                <th scope='row'>
                                    {datas.sub_name}
                                </th>
                                <th scope='row'>
                                    {datas.que}
                                </th>
                                <th scope='row'>
                                    {datas.option1}
                                </th>
                                <th scope='row'>
                                    {datas.option2}
                                </th>
                                <th scope='row'>
                                    {datas.option3}
                                </th>
                                <th scope='row'>
                                    {datas.option4}
                                </th>
                                <th scope='row'>
                                    {datas.	correct_ans}
                                </th>
                                <th>
                                <td>
                                    <button class="btn btn-ptimary"
                                        data-target="#myModal1"
                                        data-toggle="modal" 
                                        onClick={(e) => Edit(datas.mcqs_id)}>
                                        <MdEdit size={20} />
                                    </button>
                                </td>
                                <td >
                                    <button class="btn btn-ptimary" 
                                        onClick={(e) => Delete(datas.mcqs_id)}>
                                        <MdDelete size={20} />
                                    </button>
                                </td>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div class="clearfix" style={{ marginBottom: "-10px" }}> </div>
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
                        <div class="modal-body"  >
                            {edits.map((vals) => {
                                return (
                                    <>
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title" style={{ textAlign: 'center' }}>Edit Que/Ans</h4>
                                                <div class="basic-form">
                                                    <input type="text"
                                                        value={vals.sub_id}
                                                        id="subid"
                                                        hidden
                                                    />
                                                    <input type="text"
                                                        value={vals.mcqs_id}
                                                        id="mcqid"
                                                        hidden
                                                    />
                                                    <input type="text"
                                                        value={vals.sub_name}
                                                        id="subname"
                                                        hidden
                                                    />
                                                    <div class="form-row">
                                                        {/* <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Subject</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.sub_name}
                                                                onChange={(e) => setSubject(e.target.value)}
                                                                id="subject" 
                                                                required="" />
                                                        </div> */}
                                                        <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Question</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.que}
                                                                onChange={(e) => setSubject(e.target.value)} 
                                                                id="question" 
                                                                required="" />
                                                        </div>
                                                        <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Option1</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.option1}
                                                                onChange={(e) => setSubject(e.target.value)} 
                                                                id="op1" 
                                                                required="" />
                                                        </div>
                                                        <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Option2</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.option2}
                                                                onChange={(e) => setSubject(e.target.value)} 
                                                                id="op2" 
                                                                required="" />
                                                        </div>
                                                        <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Option3</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.option3}
                                                                onChange={(e) => setSubject(e.target.value)} 
                                                                id="op3" 
                                                                required="" />
                                                        </div>
                                                        <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Option4</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.option4}
                                                                onChange={(e) => setSubject(e.target.value)} 
                                                                id="op4" 
                                                                required="" />
                                                        </div>
                                                        <div class="form-group" style={{ textAlign: "Left" }}>
                                                            <label class="control-label"><b>Correct Answer</b></label>
                                                            <input type="text" 
                                                                class="form-control1 ng-invalid ng-invalid-required ng-touched" 
                                                                ng-model="model.name" 
                                                                defaultValue={vals.correct_ans}
                                                                onChange={(e) => setSubject(e.target.value)} 
                                                                id="answer" 
                                                                required="" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <br></br>

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
        </div>
    </Layout>
    )
}
export default Viewque;