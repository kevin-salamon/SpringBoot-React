import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Header from '../../Components/Header';

const StyledLogin = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = ({
    pageSelected
}) => {

    return (
        <>
            {/* <Header/> */}
            <StyledLogin>
                <p>{pageSelected}</p>
            </StyledLogin>
        </>
    )
}

export default Login;