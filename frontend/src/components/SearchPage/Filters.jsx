import React from "react";
import Filter from "./Filter";

export default function Filters({toggleTable}) {
    return (
        <div className="row toggle-box-container">
            <Filter label="Leagues" toggleTable={toggleTable} />
            <Filter label="Teams" toggleTable={toggleTable} />
            <Filter label="Users" toggleTable={toggleTable} />
            <Filter label="Matches" toggleTable={toggleTable} />
        </div>
    )
}