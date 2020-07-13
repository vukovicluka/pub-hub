import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Main = styled.main`
    width: 100%;
    overflow: hidden;
    margin-top: 80px;
`;

export const Section = styled.section`
    padding: 70px 0;
`;

export const PageTitle = styled.h1`
    text-align: center;
    padding: 30px 0 60px;
    font-size: 30px;
`;

export const Button = styled.button`
    display: block;
    width: 160px;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;
    background-color: #c59613;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        background-color: #9e7911;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }
`;

export const ButtonHref = styled(Button)``;

export const ButtonNavLink = styled(NavLink)`
    display: block;
    width: 160px;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;
    background-color: #c59613;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #9e7911;
    }
`;

