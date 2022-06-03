import React from 'react';
import styled from 'styled-components';


export default function Footer() {
    return(
        <Container>
            copyright zayed bendahou
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 70%;
    left: 15%;
    right: 15%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;