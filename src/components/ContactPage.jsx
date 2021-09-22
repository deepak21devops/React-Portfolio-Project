import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'

const Container = styled.div`
height: 50%;
margin-top: 30px;

@media screen and (max-width:480px){
   
}
`
const Wrapper = styled.div`
padding-left: 50px;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width:480px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
`

const Left = styled.div`
width: 50%;
display:flex;
justify-content: center;
align-items: center;

@media screen and (max-width:480px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
`

const Title = styled.h1`
font-weight: bold;
font-size: 40px;
`
const Input = styled.input`
margin-bottom: 25px;
padding:30px;
@media screen and (max-width:480px){
    font-size: 10px;
    padding:10px;
    margin-bottom: 30px;
    /* border:2px solid black; */
}
`

const LeftForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-right: 50px;
@media screen and (max-width:480px){
   
}
`

const RightForm = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
@media screen and (max-width:480px){
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-left: -40px;
}
`
const TextArea = styled.textarea`
width: 200px;
height: 200px;
padding:20px;
margin-top: 120px;
@media screen and (max-width:480px){
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

}

`
const Button = styled.button`
width: 100%;
padding:10px 15px;
margin-top:20px;
font-weight: bold;
background-color: darkblue;
color:white;
font-size: 17px;
border:none;
cursor: pointer;
border-radius: 10px;
`

const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width:480px){
    margin-top:20px;
    width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding:10px;

}
`
const Address = styled.p`
font-size:17px;
@media screen and (max-width:480px){
    font-size:12px;

}
`

const Mobile = styled.p`
font-size:17px;
@media screen and (max-width:480px){
    font-size:12px;

}
`

const Email = styled.p`
font-size:17px;
@media screen and (max-width:480px){
    font-size:12px;

}
`

const ContactPage = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LeftForm>
                        <Title>Questions? <br></br>Let's Get In Touch</Title>
                        <Input placeholder="Your Name" ></Input>
                        <Input placeholder="Your Email" ></Input>
                        <Input placeholder="Your Subject" ></Input>
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder="Your Message"></TextArea>
                        <Button>Send</Button>
                    </RightForm>
                </Left>
                <Right>
                    <Address>Begumpet, Hyderabad, Telangana</Address>
                    <Mobile>+91 123456789, +91 987654212</Mobile>
                    <Email>DakotaJohnson@gmail.com</Email>
                </Right>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default ContactPage
