import React from 'react'
import styled from 'styled-components'
import search from '../images/search.svg'
const Container = styled.div`
width: 25%;
height: 25%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.75);
padding:10px 10px;
border-radius: 10px;
`

const Image = styled.img`
width: 20%;
`

const Desc = styled.p`
line-height: 20px;
`

const ServicesContent = () => {
    return (
        <Container>
            <Image src={search}></Image>
            <Desc>We Help out Clients in the Fashion Industry to get the top most
                models</Desc>
        </Container>
    )
}

export default ServicesContent
