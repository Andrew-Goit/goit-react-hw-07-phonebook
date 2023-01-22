import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';
import { FilterBox, Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const filter = useSelector(state => state.filter.value);

  return (
    <FilterBox>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input id="filter" type="text" value={filter} onChange={handleChange} />
    </FilterBox>
  );
};