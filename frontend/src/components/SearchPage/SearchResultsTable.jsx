import React from "react";
import TableHeader from "../utils/Table/TableHeader";
import TableBody from "../utils/Table/TableBody";

export default function SearchResultsTable({tableId, tableTitle, header, body}) {
    return(
        <div id={tableId + "-table"} className="row search-table df-light-grey-text">
            <div className="search-table-title">
                <h5>{tableTitle}</h5>
            </div>
            <table className="responsive-table striped df-">
                <thead className="df-table-head df-light-grey-text">
                <TableHeader header={header} />
                </thead>
                <TableBody body={body} />
            </table>
        </div>
    )
}