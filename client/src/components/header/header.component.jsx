import { auth } from 'firebase';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Logo from '../../assets/logo.png';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.component.styles.css';

function Header({ currentUser }) {
	console.log(currentUser);
	return (
		<div id='header'>
			<Link to='/' className='logo'>
				<img src={Logo} />
			</Link>

			<div className='titles'>
				<ul>
					{currentUser == null ? (
						<div>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/team'>Our Team</Link>
							</li>
							<li>
								<Link to='/account'>Sign In</Link>
							</li>
						</div>
					) : currentUser.profession !== undefined &&
					  currentUser.profession !== null &&
					  currentUser.profession !== '' ? (
						<div>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/team'>Our Team</Link>
							</li>

							<li>
								<Link to='/explore'>Explore</Link>
							</li>
							<li>
								<Link
									onClick={async () => await auth().signOut()}
								>
									Sign Out
								</Link>
							</li>
						</div>
					) : (
						<div>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/team'>Our Team</Link>
							</li>

							<li>
								<Link to='/work'>Hire</Link>
							</li>
							<li>
								<Link to='/jobs'>Jobs</Link>
							</li>
							<li>
								<Link
									onClick={async () => await auth().signOut()}
								>
									Sign Out
								</Link>
							</li>
						</div>
					)}
				</ul>
			</div>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
