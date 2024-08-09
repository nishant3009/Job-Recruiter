var mysql = require("mysql");
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer")
var path = require("path");
const { log } = require("console");

var app = express();
app.use("/public", express.static("public"));
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors());
app.listen("1221")



const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "job_recruiter"

})

const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/'),
    filename: function (req, file, callback) {
        callback(null, Date.now() + "-" + path.extname(file.originalname));
    },
});

// Add Resume by user
app.post('/api/resume', (req, res) => {

    let upload = multer({ storage: storage }).single('resume');
    upload(req, res, function (err) {
        if (!req.file) {
            console.log("Not Found");
        }
        else {
            var resume = req.file.filename;
            var name = req.body.Name;
            var job = req.body.Job;
            var id = req.body.id;
            var date = new Date();

            console.log(resume);
            console.log(name);
            console.log(job);
            console.log(id);

            const ins = "insert into tbl_resume (up_resume,c_id,c_name,jc_id,r_date) value (?,?,?,?,?)";
            con.query(ins, [resume, id, name, job, date]);
            res.send();
        }
    });
})

// User Registration
app.post('/api/registration', (req, res) => {
    var name = req.body.fname;
    console.log(name);
    var email = req.body.Email;
    console.log(email);
    var password = req.body.Pass;
    console.log(password);
    var dob = req.body.Dob;
    console.log(dob);
    var address = req.body.Address;
    console.log(address);
    var number = req.body.Contact;
    console.log(number);
    var gen = req.body.Gender;
    console.log(gen);

    const ins = "insert into tbl_c_registration (c_name,c_email,c_password,c_phoneno,c_gender,c_dob,c_address) value(?,?,?,?,?,?,?)";
    con.query(ins, [name, email, password, number, gen, dob, address]);
    res.send();
})

// Login of User
app.post('/api/login', (req, res) => {
    var username = req.body.Name;
    console.log(username);
    var password = req.body.Password;
    console.log(password);

    const sel = "select * from tbl_c_registration where c_name=? and c_password=?";
    con.query(sel, [username, password], (err, result) => {
        if (result.length > 0) {
            console.log(result)
            res.send(result);
        } else {
            res.send({ message: "Wrong ID and Password" });
        }
    });
})

// Show Details of User
app.get('/api/profile', (req, res) => {
    let id = req.query.ID;
    console.log(id);

    const sel = "select * from tbl_c_registration where c_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);

    });
});

//  User can contact admin for query
app.post('/api/contact', (req, res) => {
    var fname = req.body.Name;
    console.log(fname);
    var sub = req.body.Sub;
    console.log(sub);
    var number = req.body.Contact;
    console.log(number);
    var email = req.body.Email;
    console.log(email);
    var msg = req.body.Message;
    console.log(msg);


    const ins = "insert into tbl_contact (tc_name,tc_sub,tc_num,tc_email,tc_msg) value(?,?,?,?,?)";
    con.query(ins, [fname, sub, number, email, msg]);
    res.send();


})

// Show MCQ to user for test
app.get('/api/tabel', (req, res) => {
    let id = req.query.ID;
    console.log(id);

    const sel = "select * from subject_cat where sub_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);

    });
});

// Add job categories 
app.post('/api/catform', (req, res) => {
    var jname = req.body.Name;
    console.log(jname);
    const ins = "insert into tbl_job_category (jc_name) value(?)";
    con.query(ins, [jname]);
    res.send();


});

// View Mcq in Userside
app.get('/api/fetchmcq', (req, res) => {
    const ids = req.query.Id;
    console.log(ids);
    const sel = "select * from tbl_mcqs where sub_id= ? ";
    con.query(sel, [ids], (err, result) => {
        res.send(result);

    });

});

// View Job Categories in Admin
app.get('/api/viform', (req, res) => {

    const sel = "select * from tbl_job_category ";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

// View Candidate Name in upload resume
app.get('/api/cid', (req, res) => {

    const sel = "select * from tbl_c_registration";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

// Admin Login 
app.post("/api/form", (req, res) => {
    const email = req.body.Email;
    const password = req.body.Password;
    console.log(email);
    console.log(password);

    const sel = "select * from tbl_a_login where a_email = ? and a_password = ?";
    con.query(sel, [email, password], (err, result) => {

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "wrong email or password" });
        }
    });
})

// Que add to database 
app.post('/api/addque', (req, res) => {

    var subjet = req.body.Subject;
    console.log(subjet);
    var qname = req.body.question;
    console.log(qname);
    var opt1 = req.body.op1;
    console.log(opt1);
    var opt2 = req.body.op2;
    console.log(opt2);
    var opt3 = req.body.op3;
    console.log(opt3);
    var opt4 = req.body.op4;
    console.log(opt4);
    var currect = req.body.cans;
    console.log(currect);


    const ins = "insert into tbl_mcqs (sub_id,que,option1,option2,option3,option4,correct_ans) value(?,?,?,?,?,?,?)";
    con.query(ins, [subjet, qname, opt1, opt2, opt3, opt4, currect]);
    res.send();
})

// Delete Job cat from admin
app.post('/api/delform', (req, res) => {
    let id = req.body.id;
    console.log(id);

    const sel = "delete from tbl_job_category where jc_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);


    });
});

// Edit Job cat from admin
app.post('/api/editcat', (req, res) => {
    const id = req.body.id;
    console.log(id);
    const sel = "select * from tbl_job_category where jc_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);


    });
});

// Update Job Cat from admin
app.post('/api/updatecat', (req, res) => {
    const id = req.body.id;
    const catname = req.body.Catname;
    console.log(id);
    console.log(catname);

    const ins = "update tbl_job_category set jc_name = ? where jc_id=?";
    con.query(ins, [catname, id], (err, result) => {
        res.send(result);


    });
});

// Show Mcq result
app.post('/api/checkmcq', (req, res) => {

    let marks = 0;
    let counter = 0;

    const selectedOption = req.body.selectedOptions;
    const qbid = Object.keys(selectedOption);
    const option = Object.values(selectedOption);
    for (let i = 0; i < qbid.length; i++) {

        const qb_id = qbid[i];
        const option1 = option[i];

        const query = "SELECT mcqs_id, correct_ans FROM tbl_mcqs WHERE mcqs_id=?";
        con.query(query, [qb_id], (err, result) => {
            console.log(result)
            if (option1 == result[0].correct_ans) {
                // console.log(option1)
                marks += 1;
                console.log("my marks are", marks);
            }
            counter++;
            if (parseInt(counter) === parseInt(qbid.length)) {
                console.log(marks);
                if (marks >= 2) {
                    res.send({ message: "Pass.", marks: marks })

                }
                else if (marks <= 1) {
                    res.send({ fail: "Fail" });
                }
                // res.send({ message: marks });
            }
        });
        // console.log(qb_id);
        // console.log(option1)
    }
});

// Show Subject for MCQ test
app.get('/api/subject', (req, res) => {
    const sel = "select * from subject_cat";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

// For Show job category in userside
app.get('/api/jcat', (req, res) => {
    const sel = "select * from tbl_job_category";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

//  For Forgot password
app.post('/api/forgot', (req, res) => {
    var email = req.body.Email;
    const ins = "SELECT* FROM tbl_c_registration where c_email=?"
    con.query(ins, [email], (err, result) => {
        if (result.length > 0) {
            var username = result[0].c_email;
            var pass = result[0].c_password;

            const smtpTransport = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "opportunitybuzz1221@gmail.com",
                    pass: "lngvqxvxmshgwqkq",
                },
            });
            const message = {
                from: "opportunitybuzz1221@gmail.com",
                to: username,

                subject: "Account Password",
                html: ` <p> Hello, User Your Passwors is--->> <h1> ${pass} </h1> </p>`
            };

            smtpTransport.sendMail(message, (error, info) => {
                if (error) {
                    console.error(error);
                } else {
                    //console.log("Email sent:", info.response);
                    res.send("Email Sent To Your Registered Email ID !!");
                }
            });
        } else {
            res.send({ message: "You are not registered with us !!" });
        }
    });
});

// View Resume in  Admin
app.get('/api/upresume', (req, res) => {

    let name = req.query.name;
    console.log(name);
    const sel = "SELECT * FROM tbl_resume where jc_id=?";
    con.query(sel, [name], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

// Dropdown Box for job cat in admin panel
app.get('/api/jobcat', (req, res) => {

    const sel = "select * from tbl_job_category ";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

// Delete Resume from admin
app.post("/api/delresume", (req, res) => {
    let id = req.body.id;
    console.log(id);
    let Remark = req.body.Name;
    console.log(Remark);
    let cid = req.body.cid;
    console.log(cid);
    const ins = "update tbl_resume set state = 4 , remark =? where r_id=?";
    con.query(ins, [Remark, id], (err, result1) => {
        // console.log(result)
        // res.send(result);
        if (result1) {
            let uid = result1.c_id
            const sel = "select c_email from tbl_c_registration where c_id=? ";
            con.query(sel, [cid], (err, result) => {
                // console.log(result)
                const email = result[0].c_email
                console.log(email)
                const smtpTransport = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "opportunitybuzz123@gmail.com",
                        pass: "onms trla ebxz nvqs",
                    },
                });
                const message = {
                    from: "opportunitybuzz123@gmail.com",
                    to: email,
                    subject: "Rejecting Candidate Resume",
                    html: `<p><h3> ${Remark}</h3></p>`
                };


                smtpTransport.sendMail(message, (error, info) => {
                    if (error) {
                        console.error(error);
                    } else {
                        //console.log("Email sent:", info.response);
                        res.send({ message: "Email Sent To Your Registered Email ID !!" });
                    }
                })
            })
        }
    })
});

// Changing State of Resume to first round

app.post('/api/accept', (req, res) => {

    let id = req.body.id;
    console.log(id);
    let cid = req.body.cid;
    console.log(cid);

    const ins = "update  tbl_resume set state = 1 where r_id=?";
    con.query(ins, [id], (err, result1) => {
        if (result1) {

            const sel = "select c_email from tbl_c_registration where c_id=? ";
            con.query(sel, [cid], (err, result) => {
                const email = result[0].c_email
                console.log(email)
                const smtpTransport = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "opportunitybuzz123@gmail.com",
                        pass: "onms trla ebxz nvqs",
                    },
                });
                const message = {
                    from: "opportunitybuzz123@gmail.com",
                    to: email,
                    subject: "Selected for First Round",
                    html: ` <p><h3> Dear Candidate,</h3></p>
                        <p><h3>Thank you for taking the time to apply for the Job in Our Compnay.</h3></p>
                        <p><h3>After carefully reviewing your applicatin,we inform you that we have decided to move forward you application and set interview wtih HR .</h3></p>`
                };

                smtpTransport.sendMail(message, (error, info) => {
                    if (error) {
                        console.error(error);
                    } else {
                        //console.log("Email sent:", info.response);
                        res.send({ message: "Email Sent To Your Registered Email ID !!" });
                    }
                })
            })
        }
    })
});

// Changing State of Resume to HR round

app.post('/api/accepthr', (req, res) => {

    let id = req.body.id;
    console.log(id);
    let Time = req.body.Time;
    console.log(Time);
    let Date = req.body.Dates;
    console.log(Date);
    let Venue = req.body.Venue;
    console.log(Venue);
    let Cname = req.body.Cname;
    console.log(Cname);
    let cid = req.body.cid;
    console.log(cid);
    const ins = "update  tbl_resume set state = 2, si_time=?, si_date=?, si_venue=? where r_id=?";
    con.query(ins, [Time, Date, Venue, id, Cname], (err, result1) => {
        if (result1) {
            let uid = result1.c_id
            // console.log(uid)
            const sel = "select c_email from tbl_c_registration where c_id=? ";
            con.query(sel, [cid], (err, result) => {
                // console.log(result)
                const email = result[0].c_email
                console.log(result)
                const smtpTransport = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "opportunitybuzz123@gmail.com",
                        pass: "onms trla ebxz nvqs",
                    },
                });
                const message = {
                    from: "opportunitybuzz123@gmail.com",
                    to: email,
                    subject: "Selected for an Interview round ",
                    html: ` <p><h3> Dear ${Cname},</h3></p> 
                            <p><h3>We were impressed by your background and would like to invite you to interview  to tell you a little more about the position and get to know you better. </h3></p>
                            <p><h4>Date: ${Date}</h4></p>
                            <p><h4>Time: ${Time}</h4></p>
                            <p><h4>Venue: ${Venue}</h4></p>`
                };
                smtpTransport.sendMail(message, (error, info) => {
                    if (error) {
                        console.error(error);
                    } else {
                        //console.log("Email sent:", info.response);
                        res.send({ message: "Email Sent To Your Registered Email ID !!" });
                    }
                })
            })
        }
    });
});

// Changing State of Resume to Final List

app.post('/api/acceptfinal', (req, res) => {

    let id = req.body.id;
    console.log(id);
    let cid = req.body.cid;
    console.log(cid);
    const ins = "update  tbl_resume set state = 3 where r_id=?";
    con.query(ins, [id], (err, result1) => {
        if (result1) {
            let uid = result1.c_id
            //  console.log(uid)

            const sel = "select c_email from tbl_c_registration where c_id=? ";
            con.query(sel, [cid], (err, result) => {
                const email = result[0].c_email
                console.log(result)
                const smtpTransport = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "opportunitybuzz123@gmail.com",
                        pass: "onms trla ebxz nvqs",
                    },
                });
                const message = {
                    from: "opportunitybuzz123@gmail.com",
                    to: email,
                    subject: "Selected for Job",
                    html: `<p><h3> You are selected wait for offer latter</h3></p>`
                };

                smtpTransport.sendMail(message, (error, info) => {
                    if (error) {
                        console.error(error);
                    } else {
                        //console.log("Email sent:", info.response);
                        res.send({ message: "Email Sent To Your Registered Email ID !!" });
                    }
                })

            })
        }
    });


});

// Show Resume status to user
app.get('/api/status', (req, res) => {

    var id = req.query.id;
    console.log(id);
    const sel = "SELECT a.*,b.* FROM tbl_resume as a LEFT JOIN tbl_job_category as b USING  (jc_id) where c_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);
        console.log(result);
    });
});

// Show Number Of Registar Candidate in Dashboard
app.get('/api/usercount', (req, res) => {
    const gets = "SELECT count(*) as count from tbl_c_registration";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Show Number Of Uploded Resume  in Dashboard
app.get('/api/resumecount', (req, res) => {
    const gets = "SELECT count(*) as count from tbl_resume";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Show Number Of Job Category in Dashboard
app.get('/api/jobcatcount', (req, res) => {
    const gets = "SELECT count(*) as count from tbl_job_category";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Show Number Of Questions for mcq test in Dashboard
app.get('/api/questionscount', (req, res) => {
    const gets = "SELECT count(*) as count from tbl_mcqs";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Show Number Of Feedback sent by user in Dashboard
app.get('/api/feedbackcount', (req, res) => {
    const gets = "SELECT count(*) as count from tbl_contact";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Fetch subject to add a question for mcq test
app.get('/api/fetchsubject', (req, res) => {
    const gets = "SELECT * from subject_cat";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Set Date for Job Vacancy 
app.post('/api/date', (req, res) => {
    let sdate = req.body.Sdate;
    console.log(sdate);
    let edate = req.body.Edate;
    console.log(edate);
    const ins = "update  tbl_date set s_date=?, e_date=?";
    con.query(ins, [sdate, edate]);
    res.send();

})

// Display End Date for apply for job in  Dashboard
app.get('/api/datedisplay', (req, res) => {

    const sel = "SELECT  e_date from tbl_date ";
    con.query(sel, (err, result) => {
        res.send(result);
    });

});

// Set Condidtion in page using End Date
app.get('/api/edate', (req, res) => {
    const sel = "select e_date from tbl_date ";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

// Get Que in View Que Page in admin
app.get('/api/Viewque', (req, res) => {
    const sel = "SELECT a.*,b.* from tbl_mcqs as a LEFT JOIN subject_cat as b USING (sub_id)";
    con.query(sel, (err, result) => {
        res.send(result);
        console.log(result)
    });
});

// Delete Que in View Que Page in admin
app.post('/api/delque', (req, res) => {
    let id = req.body.id;
    console.log(id);
    const sel = "delete from tbl_mcqs where mcqs_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);
    });
});

// Edit Que in View Que Page in admin
app.post('/api/editque', (req, res) => {
    const id = req.body.id;
    console.log(id);
    const sel = "select * from tbl_mcqs where mcqs_id=?";
    con.query(sel, [id], (err, result) => {
        res.send(result);
    });
})

// Show Subject in View Que Page in Admin
app.get('/api/fetchsubjects', (req, res) => {
    const gets = "SELECT * from subject_cat";
    con.query(gets, (err, result) => {
        res.send(result);
    });
});

// Update Question for MCQ test in View Que Page in Admin
app.post('/api/updateque', (req, res) => {
    // const id = req.body.id;
    // console.log(id);
    const subid = req.body.subid;
    console.log(subid);
    const mcqid = req.body.mcqid;
    console.log(mcqid);
    const qname = req.body.question;
    console.log(qname);
    const option1 = req.body.op1;
    console.log(option1);
    const option2 = req.body.op2;
    console.log(option2);
    const option3 = req.body.op3;
    console.log(option3);
    const option4 = req.body.op4;
    console.log(option4);
    const answer = req.body.answer;
    console.log(answer);

    const ins = "update tbl_mcqs set sub_id=?,que=?,option1=?,option2=?,option3=?,option4=?,correct_ans=?  where mcqs_id=?";
    con.query(ins, [subid, qname, option1, option2, option3, option4, answer, mcqid], (err, result) => {
        res.send(result)
    })
});

// Show Feedback send by candidate in admin side
app.get('/api/feedback', (req, res) => {

    const sel = "select * from tbl_contact ";
    con.query(sel, (err, result) => {
        res.send(result);

    });
});

// Chatbot
// app.get("/api/chatbot", (req, res) => {
//     const input = req.query.input;
//     console.log(input);
//     const sel =
//         "select * from tbl_a_questions where q_question like '%" + input + "%'";
//     con.query(sel, [input], (err, result) => {
//         res.send(result);
//         console.log(result);

//     });
// });

con.connect(function (error) {
    if (error)
        throw error;
    console.log("Connected")
});