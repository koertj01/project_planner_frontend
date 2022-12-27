import React from "react";
import JsonDataDisplay from './CustomTable';


export default function TaskDrawer(props) {
    return (
        <div className={props.className}>
            <p className="bg-gray-400 p-2">Example Table</p>
            <JsonDataDisplay />
        </div>
    )
}