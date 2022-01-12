import React from 'react';
import Input from './elements/Input';
import Select from './elements/Select';
import Textarea from './elements/Textarea';
import Email from './elements/Email';

const Element = ({ field: { type, name, label, placeholder, attrs, options } }) => {

    switch (type) {
        case 'text':
            return (<Input name={name} label={label} placeholder={placeholder} attrs={attrs} />)
        case 'select':
            return (<Select name={name} label={label} placeholder={placeholder} attrs={attrs} options={ options }/>)
        case 'textarea':
            return (<Textarea name={name} label={label} placeholder={placeholder} attrs={attrs} />)
        case 'email':
            return (<Email name={name} label={label} placeholder={placeholder} attrs={attrs} />)
        default:
            return null
    }
}

export default Element