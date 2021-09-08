import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import gym from '../../Assets/Images/gym.jpg'
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
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
        height: 65%;
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
                            color: #3b3b3b;
                            margin-block: 0px;
                            font-family: 'Fredoka One', cursive;
                            font-size: 18px;
                            font-weight: 600;
                            letter-spacing: 1px;
                        }
                    }
                }

                .form {
                    position: absolute;
                    top: 20%;
                    left: 5%;
                    height: 65%;
                    width: 90%;
                    display: grid;
                    grid-template-rows: 2fr 4fr 1fr;

                    .intro-box {
                        grid-row: 1 / span 1;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        flex-direction: column;

                        .title {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            width: 100%;
                            height: min-content;

                            p {
                                font-size: 26px;
                                margin-block: 0px;
                                color: #3b3b3b;
                                font-family: 'Fredoka One', cursive;
                                padding-left: 2%;
                                padding-right: 2%;
                            }
                        }

                        .tagline {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            width: 100%;
                            height: min-content;

                            p {
                                font-size: 14px;
                                margin-block: 0px;
                                color: #3b3b3bbf;
                                font-family: 'Merriweather', serif;
                                padding-left: 2%;
                                padding-right: 2%;
                            }
                        }
                    }

                    .input-box {
                        grid-row: 2 / span 1;
                        position: relative;

                        .input-select {
                            position: absolute;
                            width: 96%;
                            left: 2%;
                            height: 30%;
                            border-radius: 0px;
                            cursor: pointer;
                            transition: 0.1s ease all;
                            display: grid;
                            grid-template-rows: 45fr 55fr;
                            grid-template-columns: 1fr 9fr;

                            .placeholder {
                                grid-row: 1 / span 1;
                                grid-column: 2 / span 1;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;

                                p {
                                    font-size: 14px;
                                    margin-block: 0px;
                                    color: #3b3b3b80;
                                    text-align: left;
                                    font-family: 'Fredoka One', cursive;
                                }
                            }

                            .icon-final {
                                grid-row: 2 / span 1;
                                grid-column: 1 / span 1;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .input-final {
                                grid-row: 2 / span 1;
                                grid-column: 2 / span 1;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                position: relative;

                                // .psuedo {
                                //     position: absolute;
                                //     height: 100%;
                                //     width: 100%;
                                //     background-color: transparent;
                                //     z-index: 1;
                                // }
                                
                                input {
                                    height: 70%;
                                    width: 100%;
                                    text-align: left;
                                    padding: 5px;
                                    font-family: 'Fredoka One', cursive;
                                    font-size: 15px;
                                    font-weight: 600;
                                    border: none;
                                    user-select: none;
                                    z-index: 0;
                                    cursor: pointer;

                                    &:focus {
                                        outline: none;
                                    }
                                }
                            }
                        }
                    }

                    .button-box {
                        grid-row: 3 / span 1;
                        position: relative;

                        .button {
                            position: absolute;
                            height: 45px;
                            width: 120px;
                            top: 5%;
                            right: 0%;
                            border-radius: 40px;
                            background-color: #FE4A49;
                            cursor: pointer;
                            box-shadow: 1px 1px 2px 0px #3b3b3b80;
                            display: grid;
                            grid-template-columns: 1fr 1fr;

                            .text {
                                grid-column: 1 / span 1;
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                                padding-right: 5%;

                                p {
                                    font-family: 'Fredoka One', cursive;
                                    font-size: 20px;
                                    font-weight: 400;
                                }
                            }

                            .icon {
                                grid-column: 2 / span 1;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding-right: 30%;
                            }

                            p {
                                color: white;
                                font-size: 18px;
                                font-weight: bold;
                                margin-block: 0px;
                            }
                        }
                    }
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

    const [topInputSelected, setTopInputSelected] = useState(false);
    const [bottomInputSelected, setBottomInputSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const topInputRef = useRef();
    const bottomInputRef = useRef();
    const history = useHistory();

    const handleLogin = () => {
        history.push('/overview');
    }
      
    const toggleTopInput = () => { 
        if (!topInputSelected) {
            window.setTimeout(() => {
              window.addEventListener("click", closeTopInput);
            }, 50);
        } 
        setTopInputSelected(true);
    }

    const closeTopInput = (event) => {
        if (event.target.id !== 'top-input') {
            setTopInputSelected(false);
            window.removeEventListener("click", closeTopInput);
        }
    }

    const toggleBottomInput = () => { 
        if (!bottomInputSelected) {
            window.setTimeout(() => {
              window.addEventListener("click", closeBottomInput);
            }, 50);
        } 
        setBottomInputSelected(true);
    }

    const closeBottomInput = (event) => {
        if (event.target.id !== 'bottom-input') {
            setBottomInputSelected(false);
            window.removeEventListener("click", closeBottomInput);
        }
    }

    return (
        <StyledLogin>
            <div className='background-container' style={{backgroundImage: `url(${gym})`}} />
            <div className='layered-container' />
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
                            <div className='intro-box'>
                                <div className='title'>
                                    <p>Sign-In</p>
                                </div>
                                <div className='tagline'>
                                    <p>Log in below to start tracking</p>
                                </div>
                            </div>
                            <div className='input-box'>
                                <div 
                                    className='input-select' 
                                    id='top-input'
                                    style={{
                                        top: '15%',
                                        borderRadius: topInputSelected ? '3px' : '0px',
                                        borderBottom: topInputSelected ? 'none' : '2px solid #3b3b3b40',
                                        boxShadow: topInputSelected ? '0px 0px 8px 1px #3b3b3b40' : 'none'
                                    }} 
                                    onClick={() => {toggleTopInput(); topInputRef.current.focus()}}
                                >
                                    <div className='placeholder' id='top-input'>
                                        <p id='top-input'>{topInputSelected ? 'Email' : ''}</p>
                                    </div>
                                    <div className='icon-final' id='top-input'>
                                        <MailOutlineRoundedIcon 
                                            id='top-input'
                                            style={{
                                                fontSize: '30px',
                                                color: topInputSelected ? '#3b3b3b' : '#3b3b3b80'
                                            }}
                                        />
                                    </div>
                                    <div className='input-final' id='top-input'>
                                        <input 
                                            type='text' 
                                            id='top-input'
                                            ref={topInputRef} 
                                            style={{color: topInputSelected ? '#3b3b3b' : '#3b3b3bBF'}} 
                                            onChange={(event) => setEmail(event.target.value)}
                                            value={email}
                                            placeholder={topInputSelected ? '' : 'Email'}
                                        />
                                    </div>
                                </div>
                                <div 
                                    className='input-select' 
                                    id='bottom-input'
                                    style={{
                                        top: '55%',
                                        borderRadius: bottomInputSelected ? '3px' : '0px',
                                        borderBottom: bottomInputSelected ? 'none' : '2px solid #3b3b3b40',
                                        boxShadow: bottomInputSelected ? '0px 0px 8px 1px #3b3b3b40' : 'none'
                                    }} 
                                    onClick={() => {toggleBottomInput(); bottomInputRef.current.focus()}}
                                >
                                    <div className='placeholder' id='bottom-input'>
                                        <p id='bottom-input'>{bottomInputSelected ? 'Password' : ''}</p>
                                    </div>
                                    <div className='icon-final' id='bottom-input'>
                                        <LockRoundedIcon 
                                            id='bottom-input'
                                            style={{
                                                fontSize: '30px',
                                                color: bottomInputSelected ? '#3b3b3b' : '#3b3b3b80'
                                            }}
                                        />
                                    </div>
                                    <div className='input-final' id='bottom-input'>
                                        <input 
                                            type='password'
                                            id='bottom-input'
                                            ref={bottomInputRef} 
                                            style={{color: bottomInputSelected ? '#3b3b3b' : '#3b3b3bBF'}}
                                            onChange={(event) => setPassword(event.target.value)}
                                            value={password}
                                            placeholder={bottomInputSelected ? '' : 'Password'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='button-box'>
                                <div className='button' onClick={() => handleLogin()}>
                                    <div className='text'>
                                        <p>Go</p>
                                    </div>
                                    <div className='icon'>
                                        <ArrowRightAltRoundedIcon
                                            style={{
                                                fontSize: '30px',
                                                color: 'white'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sign-up'>
                            <p>Don't have an account?<span style={{color: '#FE4A49', fontWeight: 600, cursor: 'pointer', userSelect: 'auto'}}> Sign up</span></p>
                        </div>
                    </div>
                </div>
                <div className='design-container'>
                    <div className='design-box'>
                        <p>Filler text</p>
                    </div>
                </div>
            </div>
        </StyledLogin>
    )
}

export default Login;