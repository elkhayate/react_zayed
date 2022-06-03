import React from 'react';
import styled from 'styled-components';

export default function Applicant(props) {
    return (
        <Container>
            <Info style={{width: 'calc((100% / 8) * 2)'}}>
                {
                    props.name
                }
                {
                    props.email
                }
            </Info>
            <Info>
                {
                    props.birth
                }
            </Info>
            <Info>
                {
                    props.number
                }
            </Info>
            <Info>
                {
                    props.degree
                }
            </Info>
            <Info>
                {
                    props.experience
                }
            </Info>
            <Info style={{width: 'calc((100% / 8) * 2)'}}>
                {
                    props.description
                }
            </Info>
        </Container>
    );
}

const Container = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const Info = styled.div`
    width: calc(100% / 8);
    text-transform: capitalize;
    text-align: center;
    border: 0.5px solid black;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: scroll;
`;