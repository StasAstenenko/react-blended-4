import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter, selectFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChange = e => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <input
      className={style.input}
      onChange={onChange}
      placeholder="Find it"
      name="filter"
      value={filterValue}
    />
  );
};
