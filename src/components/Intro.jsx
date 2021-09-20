import React from 'react'
import styled from 'styled-components'
import woman from '../images/woman.jpg'

const Container = styled.div`
height: calc(100vh - 0px);
padding: 10px 20px;
/* background-color: red; */
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 60px;
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
`
const Title = styled.h1`
width: 60%;
font-weight: bold;
font-size: 60px;
line-height: 70px;
`
const Desc = styled.p`
width: 60%;
font-size: 20px;
line-height: 25px;
margin-top: -10px;
`
const ButtonWrapper = styled.div`
margin-top: 20px;
width: 60%;
display: flex;
justify-content: space-between;
`

const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border:none;
border-radius: 10px;
font-weight: bold;
`

const Contact = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`
const ContactNum = styled.span`
color:deeppink;
margin-bottom: 10px;
letter-spacing: normal;
`

const Contacttext = styled.span`
color:gray
`

const Right = styled.div`
display: flex;
justify-content: center;
width: 40%;
`

const Image = styled.img`
width:120%
`

const Intro = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Title>Adventures in creative age</Title>
                    <Desc>We believe that desiging products and services with the close partership
                        has brought out customer closer to us and this reaching our goal</Desc>
                    <ButtonWrapper>
                        <Button>START A PROJECT</Button>
                        <Contact>
                            <ContactNum>Call Us (010) 123-4567</ContactNum>
                            <Contacttext>For Any Questions or concern</Contacttext>
                        </Contact>
                    </ButtonWrapper>
                </Left>
                <Right>
                    <Image src={woman}></Image>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Intro
