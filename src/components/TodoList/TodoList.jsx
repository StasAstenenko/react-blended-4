import { Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/slice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Grid>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index + 1} />
        ))}
      </Grid>
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
    </>
  );
};
