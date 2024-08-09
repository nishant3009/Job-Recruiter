import react, { useEffect, useRef, useState } from 'react';
import Layout from '../Components/Layout';

import axios from 'axios';
function Addtest() {

  const [subject, setSubject] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1221/api/fetchsubject")
      .then((res) => setSubject(res.data));
  }, []);

  const addque = (e) => {
    window.location = '/'
    var subject = document.getElementById('subject').value
    var qname = document.getElementById('question').value
    var option1 = document.getElementById('op1').value
    var option2 = document.getElementById('op2').value
    var option3 = document.getElementById('op3').value
    var option4 = document.getElementById('op4').value
    var currect = document.getElementById('cans').value

    axios.post("http://localhost:1221/api/addque", {

      Subject: subject,
      question: qname,
      op1: option1,
      op2: option2,
      op3: option3,
      op4: option4,
      cans: currect,

    });
  }


  return (
    <Layout>
      <div id="page-wrapper">
        <div class="xs">
          <div class="well1 white">
            <form class="form-floating ng-pristine ng-invalid ng-invalid-required ng-valid-email ng-valid-url ng-valid-pattern"
              novalidate="novalidate" ng-submit="submit()">
              <fieldset>
                <div class="form-group">
                  <label class="control-label"><b>Subject</b></label>
                  <select class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="subject" required="">
                    {subject.map((datas) =>

                      <option value={datas.sub_id}>{datas.sub_name}</option>
                    )}
                  </select>
                </div>

                <div class="form-group">
                  <label class="control-label"><b>Question</b></label>
                  <input type="text" class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="question" required="" />
                </div>
                <div class="form-group">
                  <label class="control-label"><b>Option1</b></label>
                  <input type="text" class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="op1" required="" />
                </div>
                <div class="form-group">
                  <label class="control-label"><b>Option2</b></label>
                  <input type="text" class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="op2" required="" />
                </div>
                <div class="form-group">
                  <label class="control-label"><b>Option3</b></label>
                  <input type="text" class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="op3" required="" />
                </div>
                <div class="form-group">
                  <label class="control-label"><b>Option4</b></label>
                  <input type="text" class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="op4" required="" />
                </div>
                <div class="form-group">
                  <label class="control-label"><b>Correct Answer</b></label>
                  <input type="text" class="form-control1 ng-invalid ng-invalid-required ng-touched" ng-model="model.name" id="cans" required="" />
                </div>
                <div class="form-group">
                  <button onClick={addque} type="submit" class="btn btn-primary" >Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="clearfix" style={{ marginBottom: "-10px" }}> </div>
        <div class="copy">
          <p>Copyright &copy; 2023 Modern. All Rights Reserved | Develope by Jayrajsinh Ravalji  </p>
        </div>
      </div>
    </Layout>
  );
}
export default Addtest