import React from 'react';

const Card = (props) => {
    return(
        <div className='cardDiv'>
            <p>Name: {props.item.name}</p>
            <p>Country: {props.item.country}</p>
        </div>
    )
}

export default Card;