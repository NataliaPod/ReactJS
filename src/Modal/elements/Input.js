import React from 'react';

const Input = ({ name, label, placeholder, attrs }) => {

    return (
        <div class="mb-3">
            <label className="form-label">{label}</label>
            <input type="text" className="form-control" placeholder={attrs.placeholder} id="exampleInputEmail1" aria-describedby="emailHelp" /> 
        </div>
    )
}

export default Input