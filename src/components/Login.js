import { Fragment } from 'react';

function Login() {
	function handleFormSubmit(event) {
		event.preventDefault();
		const userData = {
			username: event.target.username.value,
			password: event.target.password.value,
		};
		console.log(userData);
		alert(JSON.stringify(userData));
	}
	return (
		<Fragment>
			<h1>Login Form</h1>
			<form
				className="form-login"
				onSubmit={handleFormSubmit}>
				<label>
					Username:
					<input
						type="text"
						name="username"
						className="input-login"
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						className="input-login"
					/>
				</label>
				<button
					type="submit"
					className="button-login">
					Login
				</button>
			</form>
		</Fragment>
	);
}

export default Login;
