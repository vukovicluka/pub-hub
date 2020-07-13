import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import {
    HeaderMain,
    HeaderMainInner,
    HeaderMainNav,
    HeaderMainNavList,
    HeaderMainNavListItem,
    HeaderMainNavLink,
    LogoContainerLink,
    LogoContainerImage
} from './HeaderStyle';

import ImgLogo from '../../assets/img/logo.png';

// Object key is name of route
// Object value is name shown on link in UI
const links = {
    speakers: 'Speakers',
    events: 'Events',
    addEvent: 'AddEvent',
    register: 'Register',
    all: 'All',
    login: 'Login',
    logout: 'Logout',
}

const Header = (props) => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }

    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainerLink to="/">
                    <LogoContainerImage src={ImgLogo} alt="Logo" />
                </LogoContainerLink>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        {/* Iterate through links object and return navigation list items with object data */}
                        {/* {Object.keys(links).map(key => (
                            <HeaderMainNavListItem key={key}>
                                <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                    to={`/${key}`}>{links[key]}</HeaderMainNavLink>
                            </HeaderMainNavListItem>
                        ))} */}
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to={`/speakers`}>{links.speakers}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to={`/events`}>{links.events}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to={`/add-event`}>{links.addEvent}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to={`/all`}>{links.all}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        {!isAuthenticated ?
                            <>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                        to={`/register`}>{links.register}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                                <HeaderMainNavListItem>
                                    <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                        to={`/login`}>{links.login}</HeaderMainNavLink>
                                </HeaderMainNavListItem>
                            </>
                            :
                            <HeaderMainNavListItem>
                                <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                    to={`/logout`} onClick={handleLogout}>{links.logout}</HeaderMainNavLink>
                            </HeaderMainNavListItem>
                        }
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;




