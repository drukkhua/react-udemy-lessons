import { Fragment } from 'react';
import { useState } from 'react';

function LoginControl() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function handleFormSubmit(event) {
		event.preventDefault();
		const userData = {
			username,
			password,
		};
		console.log(userData);
		alert(JSON.stringify(userData));
	}

	return (
		<Fragment>
			<h1>Login Controled Form</h1>
			<form
				className="form-login"
				onSubmit={handleFormSubmit}>
				<label>
					Username:
					<input
						type="text"
						className="input-login"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						className="input-login"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
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

export default LoginControl;
