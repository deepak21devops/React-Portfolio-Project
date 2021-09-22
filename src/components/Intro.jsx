import React from 'react'
import styled from 'styled-components'
import woman from '../images/intro.png'

const Container = styled.div`
height: calc(100vh - 0px);
padding: 10px 20px;
/* background-color: red; */
@media only screen and (max-width:480px){
    padding: 15px 25px;
    height: 10vh;
}
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
@media only screen and (max-width:480px){
    width: 100%;
}
`
const Title = styled.h1`
width: 60%;
font-weight: bold;
font-size: 60px;
line-height: 70px;
@media only screen and (max-width:480px){
    width: 100%;
    font-size: 40px;
    line-height: 30px;
    text-align: center;

}
`
const Desc = styled.p`
width: 60%;
font-size: 20px;
line-height: 25px;
margin-top: -10px;
@media only screen and (max-width:480px){
    width: 100%;
}
`
const ButtonWrapper = styled.div`
margin-top: 20px;
width: 60%;
display: flex;
justify-content: space-between;
@media only screen and (max-width:480px){
    width: 100%;
    height: 100%;
    padding-bottom:20px;
    display: flex;
    flex-direction: column;
    align-items:center
    
}
`

const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border:none;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
@media only screen and (max-width:480px){
    margin-bottom: 30px;
}
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
align-items: center;
@media only screen and (max-width:480px){
    display: none;
}
`

const Image = styled.img`
width:100%
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
