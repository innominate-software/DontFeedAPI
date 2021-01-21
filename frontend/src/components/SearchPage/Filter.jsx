import React from "react";

export default function ({label, toggleTable}) {
    return(
    <div className="col s2 toggle-box df-light-grey-text" onClick={toggleTable}>
        <h5 className="toggle-box-title">{label}</h5>
    </div>
)
}