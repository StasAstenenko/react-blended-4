import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
} from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTodos } from 'reduxTodo/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          <Form />
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
