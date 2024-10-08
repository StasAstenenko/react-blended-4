import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/operations';
import { setSelectedTodo } from 'reduxTodo/slice';

export const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onSelectTodo = () => {
    dispatch(setSelectedTodo(todo));
  };
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO № {index}
        </Text>

        <Text>{todo.text}</Text>
        <button className={style.deleteButton} type="button" onClick={onDelete}>
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={onSelectTodo}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
