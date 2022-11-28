import React from "react";
import myimage from '../person_icon.jpeg';

export default function FI(props) {
    return (
    <div className="flex flex-row p-8">
        <img alt={props.alt} src={myimage} className="w-10 h-10 bg-gray-500/10"></img>
            <p className="p-3 outline-red">Feed Item</p>
    </div>
    )
}