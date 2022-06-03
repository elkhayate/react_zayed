import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';


export default function Apply() {
    const [full, setFull] = useState('');
    const [description, setDescri] = useState('');
    const [category, setCate] = useState('');
    const [location, setLocation] = useState('');
    const [require, setRequire] = useState('');

    const [fullName, setFullname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [degree, setDegree] = useState('');
    const [experience, setExperience] = useState('');
    const [descri, setDes] = useState('');
    const [birthdate, setBirthdate] = useState('');
    

    function handleSubmit(e) {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('full', full);
        params.append('description', description);
        params.append('category', category);
        params.append('location', location);
        params.append('require', require);
        axios.post('http://localhost:8080/api/jobs', params, {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
            }})
        .then(res => {
            console.log(res.data)
        })
        setFull('')
        setDescri('')
        setCate('')
        setLocation('')
        setRequire('')
    }


    function handleSubmitSecond(e) {
        e.preventDefault();
        const params = new URLSearchParams();
        params.append('fullName', fullName);
        params.append('number', number);
        params.append('email', email);
        params.append('degree', degree);
        params.append('experience', experience);
        params.append('description', descri);
        params.append('birth', birthdate);
        axios.post('http://localhost:8080/api/applicants', params, {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
            }})
        .then(res => {
            console.log(res.data)
        })
        setFullname('')
        setNumber('')
        setEmail('')
        setDegree('')
        setExperience('')
        setDes('')
        setBirthdate('')
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type='text'
                    value={full}
                    onChange = {(e) => {setFull(e.target.value)}}
                    placeholder='full name'
                    required
                />
                <Input 
                    type='text'
                    value={description}
                    onChange = {(e) => {setDescri(e.target.value)}}
                    placeholder='full name'
                    required
                />
                <Input 
                    type='text'
                    value={category}
                    onChange = {(e) => {setCate(e.target.value)}}
                    placeholder='full name'
                    required
                />
                <Input 
                    type='text'
                    value={location}
                    onChange = {(e) => {setLocation(e.target.value)}}
                    placeholder='full name'
                    required
                />
                <Input 
                    type='text'
                    value={require}
                    onChange = {(e) => {setRequire(e.target.value)}}
                    placeholder='full name'
                    required
                />
                <Submit>Submit</Submit>
            </Form>
            <Form onSubmit={handleSubmitSecond}>
                <Input 
                    type='text'
                    value={fullName}
                    onChange = {(e) => {setFullname(e.target.value)}}
                    placeholder='full name'
                    required
                />
                <Input 
                    type='text'
                    value={number}
                    onChange = {(e) => {setNumber(e.target.value)}}
                    placeholder='number'
                    required
                />
                <Input 
                    type='text'
                    value={email}
                    onChange = {(e) => {setEmail(e.target.value)}}
                    placeholder='email'
                    required
                />
                <Input 
                    type='text'
                    value={degree}
                    onChange = {(e) => {setDegree(e.target.value)}}
                    placeholder='degree'
                    required
                />
                <Input 
                    type='text'
                    value={experience}
                    onChange = {(e) => {setExperience(e.target.value)}}
                    placeholder='experience'
                    required
                />
                <Input 
                    type='text'
                    value={descri}
                    onChange = {(e) => {setDes(e.target.value)}}
                    placeholder='description'
                    required
                />
                <Input 
                    type='text'
                    value={birthdate}
                    onChange = {(e) => {setBirthdate(e.target.value)}}
                    placeholder='birthdate'
                    required
                />
                <Submit>Submit</Submit>
            </Form>
        </Container>
    );
}
const Form = styled.form`

`;
const Input = styled.input``;
const Submit = styled.button``;
const Container = styled.div`
    width: 70%;
    margin: auto;
    height: 70px;
`;