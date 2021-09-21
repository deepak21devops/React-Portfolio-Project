import React, { useState } from 'react'
import styled from 'styled-components'
import vacation from '../images/vacation.png'
import ServicesContent from './ServicesContent'


const Container = styled.div`
margin-top: 20px;
height: 100%;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 15px 20px;

`

const Left = styled.div`
position: relative;
width: 50%;
`

const Image = styled.img`

display: ${(props) => props.open && "none"};
width: 100%;
`

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
position:absolute;
left:0;
top:10%;
bottom: 0%;
margin:auto;
`

const Right = styled.div`
width: 48%;
`

const Header = styled.h1`
line-height: 55px;
font-size: 50px;
`

const Desc = styled.p`

line-height: 20px;
font-size: 18px;
`

const ContentWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
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
