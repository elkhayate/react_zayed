import React from 'react';
import styled from 'styled-components';
import NavBar from './components/SubComponents/NavBar';
import Applicants from './components/Applicants'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './components/Jobs';
import ContactUs from './components/Contact_us';
import Apply from './components/Apply';

function App() {
  return (
    <Container>
      <NavBar />
      <MainContainer>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/jobs' element={<Jobs />}/>
            <Route path='/applicants' element={<Applicants />}/>
            <Route path='/contact_us' element={<ContactUs />}/>
            <Route path='/apply' element={<Apply />}/>
          </Routes>
        </Router>
      </MainContainer>
    </Container>
  );
}

function Home(){
  return (
    <p>home</p>
  )
}

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
export default App;
