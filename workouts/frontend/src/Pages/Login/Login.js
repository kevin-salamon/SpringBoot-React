import React, { useEffect } from 'react';
import styled from 'styled-components';
// import Header from '../../Components/Header';

const StyledLogin = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C792DF;
    position: relative;

    .login-container {
        height: 70%;
        width: 60%;
        background-color: white;
        border-radius: 12px;
        box-shadow: 3px 3px 8px 7px #3b3b3b40;
        display: grid;
        grid-template-columns: 3fr 5fr;

        .form-container {
            grid-column: 1 / span 1;
            position: relative;
        }

        .design-container {
            grid-column: 2 / span 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .design-box {
                width: 95%;
                height: 95%;
                border-radius: 12px;
                background-color: #6CD4FF;
                box-shadow: 1px 1px 3px 1px #3b3b3b80;
            }
        }
    }
`;

const Login = () => {

    return (
        <>
            {/* <Header/> */}
            <StyledLogin>
                <div className='login-container'>
                    <div className='form-container'>

                    </div>
                    <div className='design-container'>
                        <div className='design-box'>

                        </div>
                    </div>
                </div>
            </StyledLogin>
        </>
    )
}

export default Login;