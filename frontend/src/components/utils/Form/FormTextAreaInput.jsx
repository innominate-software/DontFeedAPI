import React from "react";

export default function FormTextAreaInput({label, id, name, value, handleChange, required}) {
    return (
        <label className="input-label">
            {label}
            {required ? <i className="material-icons input-valid ">check_circle</i> : null}
            <textarea id={id} name={name} value={value} className="materialize-textarea" required={required} onChange={handleChange} />
        </label>
    )
}