import React from 'react';

import './signin.styles.css';

import { auth } from '../../firebase/firebase.utils';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h1>I already have an account</h1>
				<h2>Login with your Email</h2>

				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Input
							name='email'
							type='email'
							onChange={this.handleChange}
							value={this.state.email}
							label='email'
							placeholder='Email'
							className='input'
							required
						/>
						<br />
						<Input
							name='password'
							type='password'
							value={this.state.password}
							onChange={this.handleChange}
							label='password'
							placeholder='Password'
							className='input'
							required
						/>
					</FormGroup>

					<Button
						outline
						color='warning'
						type='submit'
						className='button'
					>
						Sign in
					</Button>
				</Form>
			</div>
		);
	}
}

export default SignIn;
