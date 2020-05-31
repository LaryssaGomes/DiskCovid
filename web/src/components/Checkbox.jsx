import React from 'react';

function Checkbox({ value, selected, setSelected }) {

  function handleSelect(label) {
    let include = selected.includes(label);

    if(include) {
      let newValues = selected.filter(item => item !== label);
      setSelected(newValues);
    } else {
      let copy = [...selected, label];
      setSelected(copy);
    }
  }

  return (
    <div className="checkbox">
      <input id={value} type="checkbox" value={value} onChange={e => handleSelect(e.target.value)} />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}

export default Checkbox;