import React from "react";
import JsonDataDisplay from './CustomTable';


export default function TaskDrawer(props) {
    return (
        <div className={props.className}>
            <p>Some text</p>
            <JsonDataDisplay />
        </div>
    )
}