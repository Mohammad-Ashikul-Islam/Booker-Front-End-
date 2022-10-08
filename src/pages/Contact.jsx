import React, { Fragment } from 'react';
import styled from 'styled-components';
import {FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaSnapchatSquare } from 'react-icons/fa'
import { BsDiscord, BsFillTelephonePlusFill } from 'react-icons/bs';
import {ImMail, ImOffice } from 'react-icons/im'
import {TbSocial} from 'react-icons/tb'
import {RiUserLocationFill} from 'react-icons/ri'

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 10px;
    color: DarkCyan;
`

const Wrapper = styled.div`
    display: flex;
    margin: 10px 10px 20px 10px;
`

const SocialContainer = styled.div`
    height: 60vh;
    width: 50vw;
    margin-left: 22vw;
    font-weight: bold;
`
const OfficeContainer = styled.div`
    height: 60vh;
    width: 50vw;
    margin-right: 22vw;
    font-weight: bold;
`
const H3 = styled.h3``

const H2 = styled.h2`
    color: SaddleBrown;
`
const Span = styled.span`
    color: ${(props) => props.bg}
`

const Anchor = styled.a`
    text-decoration: none;
    color: ${(props) => props.bg}
`

const Contact = () => {
    return (
        <Fragment>
            <Title>Contact Us</Title>
            <Wrapper>
                <SocialContainer>
                    <H2><TbSocial/>Social Links</H2>

                    <H3><Anchor bg="tomato" href="https://mail.google.com/mail/u/?authuser=blackcap10210@gmail.com"> <ImMail/>Mail</Anchor></H3>

                    <H3><Anchor bg="blue" href="https://www.facebook.com/ashikul2222"> <FaFacebookSquare/>Facebook</Anchor></H3>

                    <H3><Anchor bg="LightSeaGreen" href="#"> <FaTwitterSquare/>Twitter</Anchor></H3>

                    <H3><Anchor bg="LightSalmon" href="#"> <FaInstagramSquare/>Instagram</Anchor></H3>

                    <H3><Anchor bg="orange" href="#"> <FaSnapchatSquare/>Snapchat</Anchor></H3>

                    <H3><Anchor bg="DodgerBlue" href="#"> <FaLinkedin/>LinkedIn</Anchor></H3>

                    <H3><Anchor bg="DarkCyan" href="#"> <BsDiscord/>Discord</Anchor></H3>

                    <H3><Anchor bg="LimeGreen" href="#"> <FaWhatsappSquare/>Whatsapp</Anchor></H3>

                </SocialContainer>
                <OfficeContainer>
                <H2><ImOffice/>Address & Cell </H2>
                <H3><Span bg="DarkOrchid"><BsFillTelephonePlusFill/> Cell: +15 09 2</Span></H3>
                <H3><Span bg="OliveDrab"><RiUserLocationFill/> Office: 30/7 Bairag, Anowara, CTG</Span></H3>
                </OfficeContainer>
            </Wrapper>
            
        </Fragment>
    );
};

export default Contact;