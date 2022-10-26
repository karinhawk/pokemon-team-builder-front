const Select = ({ options, onChange, label }) => {
    return (
      <>
        <select name={label} id={label} onChange={onChange}>
        <option value="">All Types</option>
          {options.map(option => (
            <option key={label + option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  };
  
  export default Select;