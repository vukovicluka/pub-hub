import React from 'react';
import { CardsContainerWrapper } from './CardsContainerStyle';

const CardsContainer = (props) => {
    return (
        <CardsContainerWrapper>
            {props.children}
        </CardsContainerWrapper>
    );
}

export default CardsContainer;