import react, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Components/Layout';
import { MdCheckCircle, MdDelete } from 'react-icons/md';
import { confirmAlert } from "react-confirm-alert"

function UPresume() {
	const [Cat, setCat] = useState([]);


	useEffect(() => {
		axios.get("http://localhost:1221/api/upresume")
			.then((res) => setCat(res.data));

	}, []);

	// const setjobname=(name)=>{
	// 	alert(name)
	// 	axios.get("http://localhost:1221/api/jobname",{params:{name : name}},)
	// 	.then((res) => setCat(res.data))

	// 	,[]}

	const Delete = (id) => {
		confirmAlert({
			message: 'Are you sure to do this.',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						axios.post("http://localhost:1221/api/delresume", { id: id })
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

				<div class="panel-body no-padding" style={{ display: "block" }}>
					<table class="table table-striped">
						<thead>
							<tr class="warning">
								<th>Sr No.</th>
								<th>Candidate Name</th>
								<th > Job Categories</th>
								<th>Upload Date</th>
								{/* //<th>Name</th> */}
								<th>Data</th>
								{/* <th></th> */}
								<th >Action</th>


							</tr>
						</thead>
						<tbody>
							{Cat.map((datas) => (
								<tr>
									<th scope='row'>
										{datas.r_id}
									</th>

									<th scope='row'>
										{datas.c_name}
									</th>

									<th scope='row' hidden>
										{datas.c_email}
									</th>

									<th scope='row' >
										{datas.jc_name}
									</th>
									<th scope='row'>
										{new Date(datas.r_date).toDateString()}
									</th>
									{/* <th>
										<h5>{datas.up_resume}</h5>
									</th> */}
									<th>
										<a href={"http://localhost:1221/public/" + datas.up_resume} target='_blank'>View Resume</a>
									</th>
									<td>
										{/* <td>
									<button class="btn btn-ptimary" donClick={(e) => Approve(datas.r_id)}>
                                            <MdCheckCircle size={20} />
                                        </button>
									</td>  */}
										<td>
											<button class="btn btn-ptimary" onClick={(e) => Delete(datas.r_id)

											}>
												<MdDelete size={18} />
											</button>
										</td>
									</td>
								</tr>
							))}


						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	)
}
export default UPresume