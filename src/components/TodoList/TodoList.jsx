import { Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';
import { selectTodos } from 'reduxTodo/slice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filterValue = useSelector(selectFilter);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filterValue.toLowerCase()),
  );
  return (
    <>
      <Grid>
        {filteredTodos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index + 1} />
        ))}
      </Grid>
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
    </>
  );
};
