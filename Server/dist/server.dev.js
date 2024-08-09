"use strict";

var mysql = require("mysql");

var express = require("express");

var bodyparser = require("body-parser");

var cors = require("cors");

var app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(cors());
app.listen("1221");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "opportunitybuzz"
});
app.post('/api/registration', function (req, res) {
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
  var ins = "insert into tbl_c_registration (c_name,c_email,c_password,c_phoneno,c_dob,c_address) value(?,?,?,?,?,?)";
  con.query(ins, [name, email, password, number, dob, address]);
  res.send();
});
app.post('/api/login', function (req, res) {
  var username = req.body.Name;
  console.log(username);
  var password = req.body.Password;
  console.log(password);
  var sel = "select * from tbl_c_registration where c_name=? and c_password=?";
  con.query(sel, [username, password], function (err, result) {
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    } else {
      res.send({
        message: "Wrong ID and Password"
      });
    }
  });
});
con.connect(function (error) {
  if (error) throw error;
  console.log("Connected");
});