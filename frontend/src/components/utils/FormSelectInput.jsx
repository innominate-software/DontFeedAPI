import React from "react";

export default function FormTextInput({defaultOption, values, options, label, id, required}) {
    return (
        <div>
            <select id={id} required={required}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>
            <label>{label}</label>
        </div>
    )
}