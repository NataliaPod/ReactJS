import React from 'react';

const Email = ({ name, label, placeholder, attrs }) => {
    return (
        <div class="mb-3">
            <label for="floatingInput">{label}</label>
            <input type="email" class="form-control" id="floatingInput" placeholder={attrs.placeholder} />
        </div>
    )
}

export default Email
