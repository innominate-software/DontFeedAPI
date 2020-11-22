import React from "react";

export default function FormTextAreaInput({label, id}) {
    return (
        <div>
            <label>{label}</label>
            <textarea id={id} className="materialize-textarea" />
        </div>
    )
}