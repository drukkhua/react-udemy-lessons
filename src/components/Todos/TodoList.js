import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, togleTodo }) {
	return (
		<div className={styles.todoListContainer}>
			{!todos.length && <h3>Todo list is empty</h3>}
			{todos.map((todo) => (
				<Todo
					todo={todo}
					deleteTodo={deleteTodo}
					togleTodo={togleTodo}
					key={todo.id}
				/>
			))}
		</div>
	);
}

export default TodoList;
