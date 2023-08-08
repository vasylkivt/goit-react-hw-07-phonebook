import { setFilter } from 'redux/filterSlice';
import { Input, InputLabel, InputWrap, SearchIcon } from './Filter.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';

export function Filter() {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => dispatch(setFilter(value));

  return (
    <InputWrap>
      <SearchIcon />
      <Input
        debounceTimeout={300}
        value={value}
        onChange={onChange}
        type="text"
        required
      />
      <InputLabel>Find contacts</InputLabel>
    </InputWrap>
  );
}
