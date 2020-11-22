import React from "react";

export default function FormSelectInput({label, id, validate, disabled}) {
    return (
        <label className="input-label">
            {label}
            {validate ? <i className="material-icons input-valid ">check_circle</i> : null}
            <input id={id} required={validate} type="text" className={validate ? "validate" : null} disabled={disabled}/>
        </label>
    )
}