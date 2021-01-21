import React from "react";

export default function FormSelectInput({label, id, name, value, handleChange, options, values, required}) {
    if (values) {
        let items = [];
        for (let i = 0; i < values.length; i++) {
            items.push({id: [i], value: values[i], option: options[i]})
        }
        const Options = items.map((item) =>
            <option key={item.id} value={item.value}>{item.option}</option>
        )
        return (
            <label className="input-label" style={{zIndex: 99}}>
                <span>{label}</span>{required ? <span className="required">*</span> : null}
                <select id={id} name={name} value={value} onChange={handleChange} required={required}>
                    {Options}
                </select>
            </label>
        )
    } else {
        return (<div />)
    }
}
