import {React} from "react";
import FI from "./Feeditem";

export default function Feed(props) {
    let newlist = [];

    newlist = props.list;
    const listItems = newlist.map((listItem) => <FI alt={props.alt}>{listItem}</FI>);
    return ( <div className={props.className} list={props.list}>{listItems}</div>);
}