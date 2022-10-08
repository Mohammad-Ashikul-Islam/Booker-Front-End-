import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {

  let handleClick = (name) => {
    let path='https://'
    path = path+name;
    path = path+'.com'
    window.location.href = path;
  }

  const LinkStyle = {
    "textDecoration": "none",
    "color": "black"
  }

  return (
    <Container>
      <Left>
        <Logo>BOOKER</Logo>
        <Desc>
          All rights reserved by <br/>
          <b>&copy;Booker Inc. Ltd.</b>
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook onClick={() => handleClick('facebook')} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter onClick={() => handleClick('twitter')} />
          </SocialIcon>
          <SocialIcon color="FB3958">
            <Instagram onClick={() => handleClick('instagram')} />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsApp onClick={() => handleClick('whatsapp')} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem> <Link to = "/" style={LinkStyle}>Home</Link> </ListItem>
          <ListItem> <Link to = "/allproducts" style={LinkStyle}>Products</Link> </ListItem>
          <ListItem> <Link to = "/cart" style={LinkStyle}>Cart</Link> </ListItem>
          <ListItem> <Link to = "/about" style={LinkStyle}>About</Link> </ListItem>
          <ListItem> <Link to = "/contact" style={LinkStyle}>Contact</Link> </ListItem>
          <ListItem> <Link to = "#" style={LinkStyle}>Terms & Condition</Link> </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Address</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Chowmuhony, South Chittagong
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +2 554 52 18
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@booker.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;