import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedTodo, setSelectedTodo } from 'reduxTodo/slice';
import { patchTodo } from 'reduxTodo/operations';

export const EditForm = () => {
  const todo = useSelector(selectSelectedTodo);
  const dispatch = useDispatch();
  return (
    <form
      className={style.form}
      onSubmit={e => {
        e.preventDefault();
        const text = e.target.text.value.trim();
        if (!text) return;

        const updatedTodo = {
          id: todo.id,
          text,
        };

        dispatch(patchTodo(updatedTodo));
      }}
    >
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => {
          dispatch(setSelectedTodo(null));
        }}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
