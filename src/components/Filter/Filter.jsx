import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { TitleFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <TitleFilter>Find contacts by name</TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
