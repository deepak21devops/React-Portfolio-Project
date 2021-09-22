import React, { useState } from 'react'
import styled from 'styled-components'
import vacation from '../images/vacation.png'
import ServicesContent from './ServicesContent'


const Container = styled.div`
margin-top: 20px;
height: 100%;

@media screen and (max-width:480px){
    /* height: 50%;; */
}
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 15px 20px;
`

const Left = styled.div`
position: relative;
width: 50%;
@media screen and (max-width:480px){
    width: 0%;
}

`

const Image = styled.img`
display: ${(props) => props.open && "none"};
width: 100%;
@media screen and (max-width:480px){
    display: none;
    width: 0%;
}
`

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
position:absolute;
left:0;
top:10%;
bottom: 0%;
margin:auto;
@media screen and (max-width:480px){
    display: ${(props) => !props.open && "none"};
    height: 200px;
    position:absolute;
    left:0;
    top:-10%;
    bottom: 0%;
}
`

const Close = styled.button`

display: ${(props) => !props.open && "none"};
position: absolute;
width: 70px;
padding:5px 10px;
border-radius: 10px;
top:32%;
left:530px;

@media screen and (max-width:480px){
    display: ${(props) => !props.open && "none"};
position: absolute;
width: 70px;
padding:5px 10px;
border-radius: 10px;
top:30%;
left:250px;
}


`

const Right = styled.div`
width: 48%;
@media screen and (max-width:480px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`

const Header = styled.h1`
line-height: 55px;
font-size: 50px;
@media screen and (max-width:480px){
    font-size: 40px;
    line-height: 45px;
    text-align: center;
}
`

const Desc = styled.p`
line-height: 20px;
font-size: 18px;
@media screen and (max-width:480px){
    font-size: 15px;
    line-height: 20px;
}
`

const ContentWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
@media screen and (max-width:480px){
  display: flex;
  
}
`
const Button = styled.button`
padding:10px 15px;
margin-top: 40px;
background-color: darkblue;
border-radius: 10px;
color:white;
font-weight: bold;
cursor: pointer;

`

const Services = () => {

    const [open, setOpen] = useState(false)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Image open={open} src={vacation}></Image>
                    <Video open={open} src="https://www.dailymotion.com/video/x6bfm4h" autoPlay controls loop></Video>
                    <Close open={open} onClick={() => setOpen(false)}>Close</Close>
                </Left>
                <Right>
                    <Header>Simple Travelling can relax your mind and brings closer to Spirituality</Header>
                    <Desc>We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.
                        We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.
                        We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.
                        We Help out Clients in the Fashion Industry to get the top most
                        models and bring out true passion among them.</Desc>
                    <ContentWrapper>
                        <ServicesContent />
                        <ServicesContent />
                        <ServicesContent />
                    </ContentWrapper>
                    <Button onClick={() => setOpen(true)} >How it Works</Button>
                </Right>

            </Wrapper>

        </Container>
    )
}

export default Services