import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({ onInputChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput type="text" onChange={e => onInputChange(e.target.value)} />
    </>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
