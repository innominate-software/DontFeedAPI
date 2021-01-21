import React from "react";

export default function FormTextInput({type, name, value, label, id, required, disabled, handleChange}) {
    return (
        <label className="input-label">
            <span>{label}</span>{required ? <span className="required">*</span> : null}
            {required ? <i className="material-icons input-valid ">check_circle</i> : null}
            <input type={type} id={id} name={name} value={value} required={required} disabled={disabled} onChange={handleChange} />
        </label>
    )
}