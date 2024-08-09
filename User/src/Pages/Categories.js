import react, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
function Categories() {
    
    let navigate = useNavigate()
    const [cat, setCat] = useState([]);
    const [view, setview] = useState([]);
    const [job, setjob] = useState([]);
    const [jccname, setjcname] = useState([]);
    const [edate, setedate] = useState([]);
    const [all, setAll] = useState(false);   //Radio Button Functionality for subject for mcq
    const [timeInterval, setTimeInterval] = useState(0);
    const [modalTimeout, setModalTimeout] = useState(null);
    const submitButtonRef = useRef(null);
    const [submitClicked, setSubmitClicked] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:1221/api/subject").then((res) => {
            setCat(res.data);
        });
        axios.get("http://localhost:1221/api/jcat").then((res) => {
            setjob(res.data)
        });
        axios.get("http://localhost:1221/api/edate")
            .then((res) => {
                setedate(res.data[0].e_date)
            });
        const interval = setInterval(() => {
            setTimeInterval((prev) => prev - 1);
        }, 1000);

        // Set a timeout for modal
        return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
            clearTimeout(modalTimeout);
        }

    }, []);

    const date = new Date().toISOString();

    // Alert after date is over can not apply
    const timesup = () => {
        alert("We regret to inform you that the application deadline for this job vacancy has passed.You Can not Apply for job. ")
        window.location = "/Main";
    }

    //Login first before apply for job
    const first = () => {
        alert("Login First");
    };

    //Close modal of MCQ test
    const closemodal = () => {
        window.location = "/Main";

    };

    //Process Of Submit button after MCQ test option selected
    const ids = (jc_name) => {
        setjcname(jc_name)
        const id = view
        setTimeInterval(10);       // Show time interval of MCQ test
        setSubmitClicked(true);    // Submit button Clicked
        axios
            .get("http://localhost:1221/api/fetchmcq", { params: { Id: id } })
            .then((response) => {
                console.log(response.data);
                setList(response.data);
                setTimeout(() => {
                    if (submitButtonRef.current) {
                        submitButtonRef.current.click();
                    }
                }, 10000);
            })
    };

    useEffect(() => {
        // Check if submit button ref exists and submit has been clicked before attempting to click
        if (submitButtonRef.current && submitClicked) {
            submitButtonRef.current.click();
        }
    }, [submitClicked]);

    const [list, setList] = useState([]);
    const [selectedOptions, setselectedoption] = useState([]);

    const handeloption = (qbid, selectedOption) => {
        setselectedoption({ ...selectedOptions, [qbid]: selectedOption });
        console.log(selectedOptions);
    };

    // After Test Given then Count Marks
    const checkAnswers = () => {
        axios
            .post("http://localhost:1221/api/checkmcq", { selectedOptions })
            .then((response) => {
                if (response.data.message) {
                    alert("Conratulation!You have passed the Test! Your Marks are  " + response.data.marks);
                    navigate('/Resume', { state: { jobname: jccname } })
                } else {
                    alert("Sorry,We regret to inform you that you have not passed this test.");
                    window.location.reload()
                }
            });


    };

    return (
        <div>
            <>
                <div class="inner-banner-w3ls"></div>
                <nav aria-label="breadcrumb" />
                <ol class="breadcrumb d-flex justify-content-center bg-theme">
                    <li class="breadcrumb-item">
                        <a href="/" class="text-white" > Home</a>
                    </li>
                    <li class="breadcrumb-item active text-white font-weight-bold" aria-current="page">Apply For Job </li>
                </ol>
                <section class="employ-sec">
                    <div class="container">
                        <div class="title-sec-w3layouts_pvt text-center pb-4" style={{ marginTop: "-30px" }}>
                            <span class="title-wthree">a world full of possibilities</span>
                            <h4 class="w3layouts_pvt-head">
                                allowing you to expand quickly.
                            </h4>
                        </div>

                        <div class="container">
                            <div class="row">
                                {job.map((val) => (
                                    <div class="col-lg-4 mb-4">
                                        <div class="card">
                                            <img src="images/b2.jpg" class="card-img-top" alt="Job Image" />
                                            <div class="card-body">

                                                <h5 class="card-title"><a href="job_single.html">{val.jc_name}</a></h5>
                                                {cat.map((val, q1) => (
                                                    <ul class="e-tags">
                                                        <li>
                                                            <input
                                                                name="q1"
                                                                key={val.sub_id}
                                                                type="radio"
                                                                id="sub"
                                                                onChange={(e) => { setview(e.target.value); setAll(true) }}
                                                                value={val.sub_id}
                                                            />
                                                            {val.sub_name}
                                                        </li>

                                                    </ul>

                                                ))}
                                                <ul class="desc-list">
                                                    <li>
                                                        <span>Location: </span>
                                                        Vadodra
                                                    </li>
                                                    {/* <li>
                                                        <span>Salary:</span>
                                                        25000 RS
                                                    </li> */}
                                                    <li>
                                                        <span>Experience: </span>0 to 2 years
                                                    </li>
                                                    {/* <li>
                                                        <span>Posted: </span>
                                                        32 minutes ago
                                                    </li> */}
                                                </ul>
                                                {sessionStorage.getItem("tbl_c_registration") == null ? (
                                                    <Link
                                                        onClick={first}
                                                        class="btn wthree-bnr-btn text-capitalize"
                                                        aria-pressed="false"
                                                        role="button"
                                                    >
                                                        Apply
                                                    </Link>
                                                ) : (
                                                    <>
                                                        {edate <= date ? (
                                                            <Link
                                                                id="over"

                                                                class="btn wthree-bnr-btn text-capitalize"
                                                                aria-pressed="false"
                                                                role="button"
                                                                onClick={(e) => timesup()}
                                                            >
                                                                Apply
                                                            </Link>
                                                        ) : (
                                                            !all ?
                                                                <Link
                                                                    id="over"
                                                                    class="btn wthree-bnr-btn text-capitalize"
                                                                    aria-pressed="false"
                                                                    role="button"

                                                                    onClick={() => alert("Please Select Subject For MCQ test")}
                                                                >
                                                                    Apply
                                                                </Link> : <Link
                                                                    id="over"
                                                                    data-target="#myModal1"
                                                                    data-toggle="modal"
                                                                    class="btn wthree-bnr-btn text-capitalize"
                                                                    aria-pressed="false"
                                                                    role="button"
                                                                    onClick={(e) => ids(val.jc_id)}
                                                                >
                                                                    Apply
                                                                </Link>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <div id="myModal1" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="text-center">MCQS Test</h2>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    style={{ color: "blue" }}
                                >
                                    &times;
                                </button>

                            </div>
                            <div class="modal-body">
                                <h6><b>Time Left:{timeInterval}</b></h6>
                                <>
                                    <div style={{ marginTop: "10px" }}>
                                        <table>
                                            <tbody>
                                                {list.map((val) => {
                                                    return (
                                                        <>
                                                            <tr key={val.mcqs_id}>
                                                                <tr>
                                                                    <h6 style={{ marginLeft: "30px" }}>
                                                                        <b>{val.que}</b>
                                                                    </h6>
                                                                </tr>

                                                                <tr>
                                                                    <input
                                                                        style={{ marginLeft: "50px" }}
                                                                        type="radio"
                                                                        name={val.mcqs_id}
                                                                        onChange={() =>
                                                                            handeloption(val.mcqs_id, val.option1)
                                                                        }
                                                                        value={val.option1}
                                                                    />
                                                                    {val.option1}
                                                                </tr>
                                                                <tr>
                                                                    <input
                                                                        style={{ marginLeft: "50px" }}
                                                                        type="radio"
                                                                        name={val.mcqs_id}
                                                                        onChange={() =>
                                                                            handeloption(val.mcqs_id, val.option2)
                                                                        }
                                                                        value={val.option2}
                                                                    />
                                                                    {val.option2}
                                                                </tr>
                                                                <tr>
                                                                    <input
                                                                        style={{ marginLeft: "50px" }}
                                                                        type="radio"
                                                                        name={val.mcqs_id}
                                                                        onChange={() =>
                                                                            handeloption(val.mcqs_id, val.option3)
                                                                        }
                                                                        value={val.option3}
                                                                    />
                                                                    {val.option3}
                                                                </tr>
                                                                <tr>
                                                                    <input
                                                                        style={{ marginLeft: "50px" }}
                                                                        type="radio"
                                                                        name={val.mcqs_id}
                                                                        onChange={() =>
                                                                            handeloption(val.mcqs_id, val.option4)
                                                                        }
                                                                        value={val.option4}
                                                                    />
                                                                    {val.option4}
                                                                </tr>
                                                            </tr>
                                                        </>
                                                    );
                                                })}

                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            </div>

                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-default"
                                    data-dismiss="modal"
                                    onClick={closemodal}
                                    style={{
                                        width: "60px",
                                        height: "40px",
                                        backgroundColor: "red",
                                        color: "white",
                                    }}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    ref={submitButtonRef}
                                    id="submitButton"
                                    class="btn btn-default"
                                    data-dismiss="modal"
                                    style={{
                                        width: "70px",
                                        height: "40px",
                                        backgroundColor: "blue",
                                        color: "white",
                                    }}
                                    onClick={checkAnswers}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}
export default Categories;


