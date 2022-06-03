import React from 'react';
import styled from 'styled-components';


export default function Job(props) {
    return (
        <Container>
            <Title>
                {
                    props.title
                }
            </Title>
            <SmallDescri>
                {
                    props.category
                }
            </SmallDescri>
            <SmallDescri>
                {
                    props.location
                }
            </SmallDescri>
            <SmallDescri>
                {
                    props.requirements
                }
            </SmallDescri>
            <Descri>
                {
                    props.descri
                }
            </Descri>
            <Button>
                apply now
            </Button>
        </Container>
    );
};

const Button = styled.button`
    width: 184px;
    height: 62px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.87;
    cursor: pointer;
`;

const Container = styled.div`
    width: 100%;
    height: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-around;
    border: 1px solid black;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
`;

const SmallDescri = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
`;

const Descri = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
`;
