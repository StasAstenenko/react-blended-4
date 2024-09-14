import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTodos } from 'reduxTodo/operations';
import { selectSelectedTodo, selectTodos } from 'reduxTodo/slice';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const selectedTodo = useSelector(selectSelectedTodo);

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!selectedTodo ? <Form /> : <EditForm />}
          <Filter />
          {todos.length ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
