import React from "react";
import myimage from '../person_icon.jpeg';
import getDog from './DogItem';

export default function FI(props, key) {

    const URI = "https://dog.ceo/api/breeds/image/random";

    const newDog = getDog(URI);
    console.log(newDog['message']);   
    
    return (
        <div className="flex flex-row p-8">
            <img src={newDog} alt={props.alt} className=""></img>
                <p>{props.text}</p>
        </div>
    )
}