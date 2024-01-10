import Button from '../UI/Button';
import {
	RiDeleteBin2Line,
	RiRefreshLine,
} from 'react-icons/ri';

import styles from './TodosActions.module.css';

function TodosActions({
	deleteCompleted,
	resetTodos,
	completedTodosExist,
}) {
	return (
		<div className={styles.todosActionContainer}>
			<Button
				title="Reset Todos"
				onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button
				onClick={deleteCompleted}
				title="Clear Completed Todos"
				disabled={!completedTodosExist}>
				<RiDeleteBin2Line />
			</Button>
		</div>
	);
}

export default TodosActions;
