import { Fragment } from 'react';
import { useState } from 'react';

function LoginControl() {
	const [data, setData] = useState({ username: '', password: '' });

	function handleFormSubmit(event) {
		event.preventDefault();
		console.log(data);
		alert(JSON.stringify(data));
	}

	function handleInputChange(text, name) {
		setData({ ...data, [name]: text });
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
						onChange={(e) => handleInputChange(e.target.value, 'username')}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						className="input-login"
						value={data.password}
						onChange={(e) => handleInputChange(e.target.value, 'password')}
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
