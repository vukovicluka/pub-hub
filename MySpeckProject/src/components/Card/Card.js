import React from 'react';
import { CardLink, CardFigure, CardImage, CardTitle } from './CardStyle';

const Card = (props) => {
    return (
        <CardLink to="/">
            <CardFigure>
                <CardImage src={props.image} alt={props.alt} />
            </CardFigure>
            <CardTitle>{props.children}</CardTitle>
        </CardLink>
    );
}

export default Card;