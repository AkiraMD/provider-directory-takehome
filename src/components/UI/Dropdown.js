import './Dropdown.scss';
import { useState } from 'react';

const Dropdown = ({ icon, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue); // controlled input pattern

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  // TO DO: refactor into helper function
  const arrayOfOptions = [
    { value: 'Ontario', label: 'ON' },
    { value: 'Quebec', label: 'QC' },
  ];

  const options = arrayOfOptions.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <>
      <img src={icon} alt="dropdown-icon" />
      <select value={value} onChange={onChangeHandler}>
        {options}
      </select>
    </>
  );
};

export default Dropdown;
