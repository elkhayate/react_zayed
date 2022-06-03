import React,{useState, useEffect} from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import Footer from './Footer';
import Head from 'next/head'
import axios from 'axios';

export default function Layout ({children}) {
    return( 
        <>
            <Head>
            <title>E-mploy</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@100&display=swap" rel="stylesheet"></link>
            </Head>
            <Container>
                <NavBar />
                    <MainContainer>
                        {children}
                    </MainContainer>
                <Footer />
            </Container>
        </>
    )
};

const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    font-family: 'Inter';
    font-style: normal;
`;

const MainContainer = styled.div`
    position: absolute;
    top: 60px;
    width: 70%;
    left: 15%;
    right: auto;
    height: 500px;
`;