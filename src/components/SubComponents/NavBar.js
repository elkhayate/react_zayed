import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'
import { Link, BrowserRouter as Router } from 'react-router-dom';

const refresh = () => {
    window.Location.reload()
}

export default function NavBar() {
    return (
        <Nav>
            <Router>
            <Container>
                <Link style={{textDecoration: 'none'}} onClick={() => {setTimeout(refresh(), 100)}}  to='/'>
                    <Image 
                        src={logo} 
                        alt ='logo' 
                    /> 
                </Link>
                <NavCont>
                    <Link  style={{textDecoration: 'none'}} onClick={() => {setTimeout(refresh(), 100)}} to='/jobs'>
                        <NavLink>
                            jobs
                        </NavLink>
                    </Link>
                    <Link style={{textDecoration: 'none'}} onClick={() => {setTimeout(refresh(), 100)}} to='/applicants'>
                        <NavLink>
                            applicants
                        </NavLink>
                    </Link>
                    <Link style={{textDecoration: 'none'}} onClick={() => {setTimeout(refresh(), 100)}} to='/apply'>
                        <NavLink>
                            apply
                        </NavLink>
                    </Link>
                    <Link style={{textDecoration: 'none'}} onClick={() => {setTimeout(refresh(), 100)}} to='/contact_us'>
                        <NavLink>
                            contact us 
                        </NavLink>
                    </Link>
                </NavCont>
            </Container>
            </Router>
        </Nav>
    );
}

const Image = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

const NavLink = styled.p`
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    cursor: pointer;
`;
const Nav = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    align-content: center;
    position: absolute;
    top: 0;
`;

const NavCont = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const Container = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;