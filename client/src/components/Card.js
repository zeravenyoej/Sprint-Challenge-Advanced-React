import React from 'react';

const Card = (props) => {
    return(
        <div>
            <p>Name: {props.item.name}</p>
            <p>Country: {props.item.country}</p>
        </div>
    )
}

export default Card;