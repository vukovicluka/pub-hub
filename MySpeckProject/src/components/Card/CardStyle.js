import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const CardLink = styled(NavLink)`
    width: calc(25% - 11.25px);
    margin-right: 15px;
    margin-bottom: 40px;
    float: left;
    height: auto;
    padding: 15px 15px 25px;
    border-radius: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const CardFigure = styled.figure`
    width: 100%;
    height: 250px;
    margin-bottom: 25px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CardTitle = styled.p`
    font-size: 25px;
    font-weight: 700;
    text-align: center;
`;
