import React from 'react';

const TextInput = ({label, type = 'text', input}) => (
    <div className="form-group">
        <label htmlFor={`input-${input.name}`}>{label}</label>
        <input
            id={`input-${input.name}`}
            type={type}
            className="form-control"
            {...input}
        />
    </div>
);

export default TextInput;
