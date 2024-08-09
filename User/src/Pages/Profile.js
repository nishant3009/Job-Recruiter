import Axios from 'axios';
import react, { useEffect, useState } from 'react';

function Profile() {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [Gender, setGender] = useState("");

    useEffect(() => {
        let user = JSON.parse(sessionStorage.getItem('tbl_c_registration'));
        var id = user.ID;
        Axios.get("http://localhost:1221/api/profile", { params: { ID: id } })
            .then((res) => {
                let obj = {
                    id: res.data[0].c_id,
                    name: res.data[0].c_name,
                    number: res.data[0].c_phoneno,
                    email: res.data[0].c_email,
                    dob: res.data[0].c_dob,
                    Gender:res.data[0].c_gender,
                    password: res.data[0].c_password,
                    address: res.data[0].c_address,
                };
                const isoDate = new Date();
                const days = isoDate.getDate().toString().padStart(2, '0');
                const month = (isoDate.getMonth() + 1).toString().padStart(2, '0');
                const year = isoDate.getFullYear().toString().slice();
                const formattedDate = `${days}-${month}-${year}`;

                setName(obj.name);
                setEmail(obj.email);
                setPassword(obj.password);
                setDob(formattedDate);
                setAddress(obj.address);
                setNumber(obj.number);
                setGender(obj.Gender)


            });
    })
    return (
        <div class="modal-body">
            <br />
            <br />
            <form action="#" method="post" class="p-3">
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Username</label>
                    <input type="text" 
                        value={name} 
                        class="form-control" 
                        placeholder=" " 
                        name="Name" 
                        id="username"
                        required="" 
                    />
                </div>
                <div class="form-group">
                    <label for="recipient-email" class="col-form-label">Email</label>
                    <input type="email" value={email} 
                        class="form-control" 
                        placeholder=" " 
                        name="Email" id="email"
                        required="" 
                    />
                </div>
                <div class="form-group">
                    <label for="password" class="col-form-label">Password</label>
                    <input type="text" value={password} 
                        class="form-control" 
                        placeholder=" " 
                        name="Password" id="password"
                        required="" 
                    />
                </div>
                <div class="form-group">
                    <label for="dob" class="col-form-label">Date of Birth</label>
                    <input value={dob} 
                        class="form-control" 
                        placeholder=" " 
                        name="dob" id="dob" 
                        required="" 
                    />
                </div>
                <div class="form-group">
                    <label for="Address" class="col-form-label">Gender</label>
                    <input type="text" 
                        value={Gender} 
                        class="form-control" 
                        placeholder=" " 
                        name="gender" id="gender"
                        required="" 
                    />
                </div>
                <div class="form-group">
                    <label for="Address" class="col-form-label">Address</label>
                    <input type="text" value={address} 
                        class="form-control" 
                        placeholder=" " 
                        name="Address" id="address"
                        required="" 
                    />
                </div>
                <div class="form-group">
                    <label for="Contact No" class="col-form-label">Contact No</label>
                    <input type="number" 
                        value={number} 
                        class="form-control" 
                        title='Error Message' 
                        name="Contact No" id="contactno"
                        pattern="[1-9]{1}[0-9]{9}" required="" 
                    />
                </div>
            </form>
        </div>

    )
}
export default Profile;