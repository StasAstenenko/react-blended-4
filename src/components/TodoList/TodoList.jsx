import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/slice';

export const TodoList = () => {
  const filteredTodos = useSelector(selectFilteredTodos);
  return (
    <>
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((todo, index) => (
            <Todo key={todo.id} todo={todo} index={index + 1} />
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
