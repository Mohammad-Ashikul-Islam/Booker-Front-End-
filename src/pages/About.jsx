import React, { Fragment } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 10px;
    color: DarkCyan;
`
const Wrapper = styled.div`
    margin: 10px 10vw 5vh 10vw;
    height: 60vh;
    font-weight: 5px;
    font-size: 20px;
    word-spacing: 10px;
    word-break: break-all;
`
const Bold = styled.span`
    font-weight: 700;
`

const About = () => {
    return (
        <Fragment>
            <Title>About Us</Title>
            <Wrapper><Bold>BOOKER</Bold> is an online based book selling platform which ensures the best service to consumers in the most satisfying style. BOOKER is hoping to create a wise nation through bringing out book to the people's hand in the easiest possible way. As a result, BOOKER defines the most reasonable price compared to the other competitor in market and also guarantees the best service to the customers. We Know, There is a provab as "Books are men's best friend" and <Bold>BOOKER</Bold> is trying to be the best supplier of those books. Finally, Napoleon said, "Give me an educated mother, I shall promise you the birth of a civilized, educated nation" and therefore, Reading books are one of best way to get educated and so is <Bold>BOOKER</Bold> to give it in your hand in the best way. </Wrapper>
        </Fragment>
    );
};

export default About;