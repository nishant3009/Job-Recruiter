import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { set } from 'react-hook-form';


function Table() {
  const [list, setList] = useState([]);
  const [selectedOptions, setselectedoption] = useState([]);
  let location = useLocation();
  let id = location.state.id;
  useEffect(() => {

    axios.get("http://localhost:1221/api/fetchmcq", { params: { Id: id } }).then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  }, []);

  const handeloption = (qbid, selectedOption) => {
    setselectedoption({ ...selectedOptions, [qbid]: selectedOption });
    console.log(selectedOptions);
  }

  const checkAnswers = () => {
    axios.post("http://localhost:1221/api/checkmcq", { selectedOptions })
      .then((response) => {
        alert(response.data.message)
        console.log(response.data);
      })
  }


  return (


    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>



      <h2 class="text-center">MCQ Test</h2>

      <table>
        <tbody>

          {list.map((val) => {

            return (
              <>
                <tr key={val.mcqs_id}>
                  <tr><h6 style={{ marginLeft: "30px" }}>{val.que}</h6></tr>

                  <tr><input style={{ marginLeft: "50px" }} type="radio" name={val.mcqs_id} onChange={() => handeloption(val.mcqs_id, val.option1)} value={val.option1} />{val.option1}</tr>
                  <tr><input style={{ marginLeft: "50px" }} type="radio" name={val.mcqs_id} onChange={() => handeloption(val.mcqs_id, val.option2)} value={val.option2} />{val.option2}</tr>
                  <tr><input style={{ marginLeft: "50px" }} type="radio" name={val.mcqs_id} onChange={() => handeloption(val.mcqs_id, val.option3)} value={val.option3} />{val.option3}</tr>
                  <tr><input style={{ marginLeft: "50px" }} type="radio" name={val.mcqs_id} onChange={() => handeloption(val.mcqs_id, val.option4)} value={val.option4} />{val.option4}</tr>
                  <br />


                </tr>

              </>
            )
          })};


        </tbody>
      </table>
      <div class="text-center">
        <button class="submit-btn" onClick={checkAnswers}>Submit</button>
        {/* <button id="showAnswer" class="button hide">Show Answer</button> */}
      </div>

    </div>
  )
}
export default Table