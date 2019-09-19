import React from 'react';

const TextArea = ({label, input}) => (
    <div className="form-group">
        <label htmlFor={`textarea-${input.name}`}>{label}</label>
        <textarea
            id={`textarea-${input.name}`}
            className="form-control"
            {...input}
        />
    </div>
);

export default TextArea;
