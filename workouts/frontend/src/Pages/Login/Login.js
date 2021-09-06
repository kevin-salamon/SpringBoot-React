import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import gym from '../../Assets/Images/gym.jpg'
// import Header from '../../Components/Header';

const StyledLogin = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #C792DF;
    position: relative;

    .background-container {
        z-index: -2;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        background-size: cover;
        background-repeat: no-repeat;
        // background-position: center center;
        opacity: 0.5;
    }

    .layered-container {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #edd29840;
    }

    .login-container {
        height: 70%;
        width: 50%;
        background-color: white;
        border-radius: 12px;
        box-shadow: 3px 3px 8px 7px #3b3b3b40;
        display: grid;
        grid-template-columns: 1fr 1fr;

        .form-container {
            grid-column: 1 / span 1;
            display: flex;
            justify-content: center;
            align-items: center;


            .login-box {
                width: 95%;
                height: 95%;
                border-radius: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                .logo-banner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 20%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    .logo {
                        height: 50%;
                        width: 30%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #080708;
                        border-radius: 8px;

                        p {
                            color: white;
                            font-size: 20px;
                            margin-block: 0px;
                            font-family: 'Permanent Marker', cursive;
                        }
                    }

                    .catchphrase {
                        height: 50%;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        p {
                            color: #3b3b3bcc;
                            margin-block: 0px;
                            font-family: 'Merriweather', serif;
                            font-size: 18px;
                            font-weight: 600;
                        }
                    }
                }

                .form {
                    position: absolute;
                    top: 20%;
                    left: 0;
                    height: 65%;
                    width: 100%;
                    border: 1px solid black;
                }

                .sign-up {
                    position: absolute;
                    top: 90%;
                    height: 10%;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    p {
                        font-size: 16px;
                        margin-block: 0px;
                        color: #3b3b3b80;
                        font-family: 'Merriweather', serif;
                    }
                }
            }
        }

        .design-container {
            grid-column: 2 / span 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .design-box {
                width: 95%;
                height: 95%;
                border-radius: 12px;
                background-color: #080708;
                display: flex;
                justify-content: center;
                align-items: center;
                
                p {
                    margin-block: 0px;
                    font-size: 60px;
                    font-family: 'Permanent Marker', cursive;
                    color: white;
                    user-select: none;
                }
            }
        }
    }
`;

const Login = () => {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/overview');
    }

    return (
        <StyledLogin>
            <div className='background-container' style={{backgroundImage: `url(${gym})`}}>

            </div>
            <div className='layered-container'></div>
            <div className='login-container'>
                <div className='form-container'>
                    <div className='login-box'>
                        <div className='logo-banner'>
                            <div className='logo'>
                                <p>Logo</p>
                            </div>
                            <div className='catchphrase'>
                                <p>BUILDING BIGGER, TRACKING BETTER</p>
                            </div>
                        </div>
                        <div className='form'>

                        </div>
                        <div className='sign-up'>
                            <p>Don't have an account?<span style={{color: '#FE4A49', fontWeight: 600, cursor: 'pointer', userSelect: 'auto'}}> Sign up</span></p>
                        </div>
                    </div>
                </div>
                <div className='design-container' onClick={() => handleLogin()}>
                    <div className='design-box'>
                        <p>Filler text</p>
                    </div>
                </div>
            </div>
        </StyledLogin>
    )
}

export default Login;