import React from 'react'
import styled from "styled-components";
import Card from "../components/Card";
const Home = () => {
    const Container = styled.div`
      background-color: ${({ theme }) => theme.primary};
      width: 100%;
      height: 100%;
      padding: 15px 15px;
      border-top: 1px solid ${({ theme }) => theme.soft};
      overflow-y: scroll;`;

    const Videos = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;`;  
    
    return (
    <Container>
      <Videos>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Videos>
    </Container>
  
  )
}

export default Home