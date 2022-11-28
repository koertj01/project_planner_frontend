import React from "react";
import myimage from '../person_icon.jpeg';

export default function FI(props) {
    return (
    <div><img alt={props.alt} src={myimage}></img></div>
    )
}