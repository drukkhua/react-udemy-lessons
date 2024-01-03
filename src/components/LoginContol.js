import { Fragment } from 'react';
import { useState } from 'react';

function LoginControl() {
	const [data, setData] = useState({ username: '', password: '' });

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(data);
		alert(JSON.stringify(data));
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
						value={data.username}
						onChange={(e) => {
							setData({ ...data, username: e.target.value });
							// setUsername(e.target.value);
						}}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						className="input-login"
						value={data.password}
						onChange={(e) => {
							setData({ ...data, password: e.target.value });
							// setUsername(e.target.value);
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
