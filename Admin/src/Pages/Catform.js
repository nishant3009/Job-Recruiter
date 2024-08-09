import react from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';
function Catform() {



  const Catform = (e) => {
    var name = document.getElementById('jname').value
    alert(name)

    axios.post("http://localhost:1221/api/catform", {
      Name: name
    });
window.location.reload();
  }

  return (
    <Layout>
      <div id="page-wrapper">
        <div class="xs">
          <div class="well1 white">
            <div class="col-md-6 col-md-offset-3 inbox_center" style={{ marginTop: "80px" }}>
              <div class="Set Date">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    Add Job Categories
                  </div>
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label" style={{ marginLeft: "05PX" }}><b>Category</b></label>
                      <input type="text"
                        class="form-control1 ng-invalid ng-invalid-required ng-touched"
                        ng-model="model.name"
                        id="jname"
                        name='name'
                        required=""
                      />
                    </div>
                    <div class="form-group" style={{ marginLeft: "220px" }}>
                      <button onClick={Catform} type="Submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix" style={{ marginBottom: "261px" }}> </div>
        <div class="copy">
          <p>Copyright &copy; 2023 Modern. All Rights Reserved | Develope by Jayrajsinh Ravalji  </p>
        </div>
      </div>
    </Layout >

  )
}
export default Catform