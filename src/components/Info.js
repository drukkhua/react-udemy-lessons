import './Info.css';
import styles from './Info.module.css';

console.log(styles);

function Info() {
	return (
		<div className={styles.info}>
			<h1>Hello from the info component</h1>
			<button className="my-bytton">Click me in the info component</button>
		</div>
	);
}

export default Info;
