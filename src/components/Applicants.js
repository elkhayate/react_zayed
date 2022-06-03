import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import SectionTitle from './SubComponents/SectionTitle';
import axios from 'axios';
import Applicant from './SubComponents/Applicant';

export default function Applicants() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:8080/api/applicants/')
      .then(res => {
        setData(res.data);
      })
    }, [])
    console.log(data)
    return(
        <Container>
            <SectionTitle title='Applicants' info = 'here you can find a list of all applicants.'/>
            <ListInfos>
                <ListInfo style={{width: 'calc((100% / 8) * 2)'}}>
                    name
                </ListInfo>
                <ListInfo>
                    date of birth
                </ListInfo>
                <ListInfo>
                    number
                </ListInfo>
                <ListInfo>
                    degree
                </ListInfo>
                <ListInfo>
                    experience
                </ListInfo>
                <ListInfo style={{width: 'calc((100% / 8) * 2)'}}>
                    description
                </ListInfo>
            </ListInfos>
            <AppList>
                {
                    data.map(data => {
                        return <Applicant 
                            key = {data._id}
                            name = {data.fullName}
                            email = {data.email}
                            birth = {data.dateOfBirth}
                            number = {data.number}
                            degree= {data.number}
                            experience = {data.experience}
                            description = {data.description}
                        />
                    })
                }
            </AppList>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
`;

const AppList = styled.div`
    height: calc(100vh - 330px);
    border-radius: 5px;
    margin-top: 30px;
`;

const ListInfos = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const ListInfo = styled.div`
    width: calc(100% / 8);
    text-transform: capitalize;
    text-align: center;
    border: 0.5px solid black;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
`;

