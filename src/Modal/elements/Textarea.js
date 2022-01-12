import React from 'react';

const Textarea = ({ name, label, placeholder, attrs }) => {
    return (
        <div class="mb-3">
            <label>{label}</label>
            <textarea class="form-control" placeholder={attrs.placeholder} id="floatingTextarea2"></textarea>
        </div>
    )
}

export default Textarea
