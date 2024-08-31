import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/operations';

export const Form = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = { text: e.target.search.value };
    dispatch(addTodo(newTodo));
    e.target.reset();
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
