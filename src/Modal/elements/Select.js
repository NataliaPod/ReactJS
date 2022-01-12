import React from 'react';

const Select = ({ name, label, placeholder, attrs, options }) => {
  console.log(options)

  return (
    <div class="mb-3">
      <label>{label}</label>
      <select class="form-select"
        aria-label="Default select example">
        {options.map((option, i) => <option value={option.i} placeholder={attrs.placeholder} key={i}>{option.option_label}</option>)}
      </select>
    </div>
  )

}

export default Select