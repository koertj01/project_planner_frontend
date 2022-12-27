import React from "react";



export default function Header(props) {
    return (
    <div className={props.className}>
        <p className="text-center">{props.text}</p>
    </div>)
}