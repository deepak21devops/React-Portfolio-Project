import React from 'react'
import styled from 'styled-components'
import Intro from './components/Intro'
import Navbar from './components/Navbar'


const Container = styled.div`
font-family:"JoseRegular";
height: 90vh;
overflow: hidden;
`

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
    </Container>
  )
}

export default App
