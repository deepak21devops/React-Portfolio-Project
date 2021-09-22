import React from 'react'
import styled, { css } from 'styled-components'
import ContactPage from './components/ContactPage'
import Features from './components/Features'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Prices from './components/Prices'
import Services from './components/Services'


const Container = styled.div`
font-family:"JoseRegular";
height: 120vh;
overflow: hidden;
position: relative;
@media screen and (max-width:480px){
  height: 160vh;
}
`

const ContainerOne = styled.div`
font-family:"JoseRegular";
height: 90vh;
overflow: hidden;
position: relative;
@media screen and (max-width:480px){
  /* height: 160vh; */
}
`

const ContainerTwo = styled.div`
font-family:"JoseRegular";
height: 120vh;
overflow: hidden;
position: relative;
@media screen and (max-width:480px){
  /* height: 160vh; */
}
`

const Shape = css`
height: 100%;
width: 100%;
position: absolute;
left:0;
top:0;
`

const IntroClip = styled.div`
${Shape}
clip-path: polygon(69% 0, 100% 0%, 100% 100%, 54% 100%);
z-index:-1;
background-color: crimson;
`

const FeatureClip = styled.div`
${Shape}
clip-path: polygon(0 0, 54% 0, 32% 100%, 0 100%);
z-index:-1;
background-color: pink;
`

const ServiceClip = styled.div`
${Shape}
clip-path: polygon(0 0, 32% 0, 32% 100%, 0% 100%);
z-index:-1;
background-color:lightblue
`
const PriceClip = styled.div`
${Shape}
clip-path: polygon(32% 0, 100% 0%, 100% 100%, 55% 100%);
z-index:-1;
background-color:crimson
`

const App = () => {
  return (
    <>
      <ContainerOne>
        <Navbar />
        <Intro />
        <IntroClip />
      </ContainerOne>

      <ContainerOne>
        <Features />
        <FeatureClip />
      </ContainerOne>

      <ContainerTwo>
        <Services />
        <ServiceClip />
      </ContainerTwo>

      <Container>
        <Prices />
        <PriceClip />
      </Container>

      <Container>
        <ContactPage />
      </Container>


    </>

  )
}

export default App