import {React} from "react";
import FI from "./Feeditem";

export default function Feed(props) {
    let newlist = [];

    newlist = props.list;
    // adding key={listItem.toString()} fixes the warning where that a key should be provided for list items.
    const listItems = newlist.map((listItem) => <FI alt={props.alt} key={listItem.toString()}>{listItem}</FI>);
    return ( <div className={props.className} list={props.list}>{listItems}</div>);
}