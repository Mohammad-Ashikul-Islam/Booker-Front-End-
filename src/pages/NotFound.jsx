import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: orange;
    font-size: 50px;
    font-weight: 800;
`

const NotFound = () => {
    return (
        <Container>
            404 Page Not Found
        </Container>
    );
};

export default NotFound;