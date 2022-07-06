import './Dropdown.scss';
import { useState } from 'react';

const Dropdown = ({ icon, defaultValue, options, onChange }) => {
  const [value, setValue] = useState(defaultValue); // controlled input pattern

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const optionsList = options.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <>
      <img src={icon} alt="dropdown-icon" />
      <select value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </>
  );
};

export default Dropdown;
