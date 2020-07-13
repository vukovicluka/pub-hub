import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderMain = styled.header`
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #fff;
    width: 100%;
    height: 80px;
`;

export const HeaderMainInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const HeaderMainNav = styled.nav`
    display: none;

    @media only screen and (min-width: 1024px){
        display: block;
        float: right;
    }
`;

export const HeaderMainNavList = styled.ul`
    list-style: none;
`;

export const HeaderMainNavListItem = styled.li`
    display: inline-block;
    line-height: 80px;
    margin-right: 50px;

    &:last-child {
        margin-right: 0;
    }
`;

export const HeaderMainNavLink = styled(NavLink)`
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.02em;
    transition: color 0.3s ease-out;

    &:hover {
        color: #c59613;
    }
`;

export const LogoContainerLink = styled(NavLink)`
    width: 80px;
    height: 70px;
    margin-top: 5px;
    float: left;
`;

export const LogoContainerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

