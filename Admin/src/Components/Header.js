import react from 'react';
import axios from 'axios';
import Form from '../Pages/Form';
//import { Link} from 'react-router-dom';
function Header() {
	let user = JSON.parse(sessionStorage.getItem('tbl_a_login'));

	const clear = () => {
		sessionStorage.clear();
		window.location = "/"
	};
	return (
		<nav class="top1 navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: '0' }}>
			<div class="navbar-header">

				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" >Admin</a>
			</div>
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="#" class="dropdown-toggle avatar" data-toggle="dropdown"><img src="images/1.png" /><span class="badge">9</span></a>
					<ul class="dropdown-menu">
						<li class="dropdown-menu-header text-center">
							<strong>Account</strong>
						</li>
						<li class="m_2"><a onClick={clear} href="#"><i class="fa fa-lock"></i> Logout</a></li>
					</ul>
				</li>
			</ul>
		</nav>

	)
}
export default Header