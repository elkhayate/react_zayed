import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Job from './SubComponents/Job';
import axios from 'axios';

export default function Jobs() {
    const [dataa, setData] = useState([]);
    const [loading, setLoanding] = useState(true)
    useEffect(() => {
      axios.get('http://localhost:8080/api/jobs/')
      .then(res => {
        setData(res.data);
        console.log(res.data)
        setLoanding(false)
      })
    }, [])
    return(
        <Container>
                    {
                        loading ?
                        <p>loading...</p>
                        :
                        dataa.map(data => {
                            return <Job 
                            title = {data.fullName}
                            category = {data.category}
                            location = {data.location}
                            requirements = {data.requirements}
                            descri = {data.description}
                            key = {data._id}
                        />
                        })
                    }
        </Container>
    );
}

const Container = styled.div`
    width: 70%;
    margin: auto;
    height: 70px;
`;