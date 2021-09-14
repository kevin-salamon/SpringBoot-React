import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import gym from '../../Assets/Images/gym.jpg'
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

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
                transition: 0.2s ease all;

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

            .signup-box {
                width: 95%;
                height: 95%;
                border-radius: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                transition: 0.2s ease all;

                .back-banner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 15%;
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-end;
                    padding-left: 5%;
                }

                .form {
                    position: absolute; 
                    top: 15%;
                    left: 5%;
                    width: 90%;
                    height: 75%;
                    display: grid;
                    grid-template-rows: 1.5fr 4.5fr 1.5fr;

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
                            height: 25%;
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
                            grid-template-columns: 2fr 1fr;

                            .text {
                                grid-column: 1 / span 1;
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                                padding-right: 5%;

                                p {
                                    font-family: 'Fredoka One', cursive;
                                    font-size: 16px;
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

                .login {
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
    const [topSignupInputSelected, setTopSignupInputSelected] = useState(false);
    const [middleSignupInputSelected, setMiddleSignupInputSelected] = useState(false);
    const [bottomSignupInputSelected, setBottomSignupInputSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [name, setName] = useState('');
    const [loginOpacity, setLoginOpacity] = useState(true);
    const [signupOpacity, setSignupOpacity] = useState(false);
    const [loginDisplay, setLoginDisplay] = useState(true);
    const [signupDisplay, setSignupDisplay] = useState(false);
    const topInputRef = useRef();
    const bottomInputRef = useRef();
    const topSignupInputRef = useRef();
    const middleSignupInputRef = useRef();
    const bottomSignupInputRef = useRef();
    const history = useHistory();

    const handleLogin = () => {
        history.push('/overview');
    }

    const handleSignup = () => {
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

    const toggleTopSignupInput = () => { 
        if (!topSignupInputSelected) {
            window.setTimeout(() => {
              window.addEventListener("click", closeTopSignupInput);
            }, 50);
        } 
        setTopSignupInputSelected(true);
    }

    const closeTopSignupInput = (event) => {
        if (event.target.id !== 'top-signup-input') {
            setTopSignupInputSelected(false);
            window.removeEventListener("click", closeTopSignupInput);
        }
    }

    const toggleMiddleSignupInput = () => { 
        if (!middleSignupInputSelected) {
            window.setTimeout(() => {
              window.addEventListener("click", closeMiddleSignupInput);
            }, 50);
        } 
        setMiddleSignupInputSelected(true);
    }

    const closeMiddleSignupInput = (event) => {
        if (event.target.id !== 'middle-signup-input') {
            setMiddleSignupInputSelected(false);
            window.removeEventListener("click", closeMiddleSignupInput);
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

    const toggleBottomSignupInput = () => { 
        if (!bottomSignupInputSelected) {
            window.setTimeout(() => {
              window.addEventListener("click", closeBottomSignupInput);
            }, 50);
        } 
        setBottomSignupInputSelected(true);
    }

    const closeBottomSignupInput = (event) => {
        if (event.target.id !== 'bottom-signup-input') {
            setBottomSignupInputSelected(false);
            window.removeEventListener("click", closeBottomSignupInput);
        }
    }

    const setSignupPage = () => {
        setLoginOpacity(false);
        setTimeout(() => {
            setLoginDisplay(false);
            setSignupOpacity(true);
            setSignupDisplay(true);
        }, 200);
    }

    const setLoginPage = () => {
        setSignupOpacity(false);
        setTimeout(() => {
            setSignupDisplay(false);
            setLoginOpacity(true);
            setLoginDisplay(true);
        }, 200);
    }

    return (
        <StyledLogin>
            <div className='background-container' style={{backgroundImage: `url(${gym})`}} />
            <div className='layered-container' />
            <div className='login-container'>
                <div className='form-container'>
                    <div 
                        className='login-box'
                        style={{
                            opacity: loginOpacity ? 1 : 0,
                            display: loginDisplay ? 'flex' : 'none'
                        }}
                    >
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
                                        top: '5%',
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
                                        top: '40%',
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
                            <p onClick={() => setSignupPage()}>Don't have an account?<span style={{color: '#FE4A49', fontWeight: 600, cursor: 'pointer', userSelect: 'auto'}}> Sign up</span></p>
                        </div>
                    </div>
                    <div 
                        className='signup-box'
                        style={{
                            opacity: signupOpacity ? 1 : 0,
                            display: signupDisplay ? 'flex' : 'none'
                        }}
                    >
                        <div className='back-banner'>
                            <KeyboardBackspaceRoundedIcon 
                                style={{
                                    fontSize: '48px',
                                    color: '#3b3b3b80',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setLoginPage()}
                            />
                        </div>
                        <div className='form'>
                            <div className='intro-box'>
                                <div className='title'>
                                    <p>Sign Up</p>
                                </div>
                                <div className='tagline'>
                                    <p>And start your journey</p>
                                </div>
                            </div>
                            <div className='input-box'>
                                <div 
                                    className='input-select' 
                                    id='top-signup-input'
                                    style={{
                                        top: '0%',
                                        borderRadius: topSignupInputSelected ? '3px' : '0px',
                                        borderBottom: topSignupInputSelected ? 'none' : '2px solid #3b3b3b40',
                                        boxShadow: topSignupInputSelected ? '0px 0px 8px 1px #3b3b3b40' : 'none'
                                    }} 
                                    onClick={() => {toggleTopSignupInput(); topSignupInputRef.current.focus()}}
                                >
                                    <div className='placeholder' id='top-signup-input'>
                                        <p id='top-signup-input'>{topSignupInputSelected ? 'Full Name' : ''}</p>
                                    </div>
                                    <div className='icon-final' id='top-signup-input'>
                                        <AccountCircleRoundedIcon 
                                            id='top-signup-input'
                                            style={{
                                                fontSize: '30px',
                                                color: topSignupInputSelected ? '#3b3b3b' : '#3b3b3b80'
                                            }}
                                        />
                                    </div>
                                    <div className='input-final' id='top-signup-input'>
                                        <input 
                                            type='text' 
                                            id='top-signup-input'
                                            ref={topSignupInputRef} 
                                            style={{color: topSignupInputSelected ? '#3b3b3b' : '#3b3b3bBF'}} 
                                            onChange={(event) => setName(event.target.value)}
                                            value={name}
                                            placeholder={topSignupInputSelected ? '' : 'Full Name'}
                                        />
                                    </div>
                                </div>
                                <div 
                                    className='input-select' 
                                    id='middle-signup-input'
                                    style={{
                                        top: '28%',
                                        borderRadius: middleSignupInputSelected ? '3px' : '0px',
                                        borderBottom: middleSignupInputSelected ? 'none' : '2px solid #3b3b3b40',
                                        boxShadow: middleSignupInputSelected ? '0px 0px 8px 1px #3b3b3b40' : 'none'
                                    }} 
                                    onClick={() => {toggleMiddleSignupInput(); middleSignupInputRef.current.focus()}}
                                >
                                    <div className='placeholder' id='middle-signup-input'>
                                        <p id='middle-signup-input'>{middleSignupInputSelected ? 'Email' : ''}</p>
                                    </div>
                                    <div className='icon-final' id='middle-signup-input'>
                                        <MailOutlineRoundedIcon 
                                            id='middle-signup-input'
                                            style={{
                                                fontSize: '30px',
                                                color: middleSignupInputSelected ? '#3b3b3b' : '#3b3b3b80'
                                            }}
                                        />
                                    </div>
                                    <div className='input-final' id='middle-signup-input'>
                                        <input 
                                            type='text' 
                                            id='middle-signup-input'
                                            ref={middleSignupInputRef} 
                                            style={{color: middleSignupInputSelected ? '#3b3b3b' : '#3b3b3bBF'}} 
                                            onChange={(event) => setNewEmail(event.target.value)}
                                            value={newEmail}
                                            placeholder={middleSignupInputSelected ? '' : 'Email'}
                                        />
                                    </div>
                                </div>
                                <div 
                                    className='input-select' 
                                    id='bottom-signup-input'
                                    style={{
                                        top: '56%',
                                        borderRadius: bottomSignupInputSelected ? '3px' : '0px',
                                        borderBottom: bottomSignupInputSelected ? 'none' : '2px solid #3b3b3b40',
                                        boxShadow: bottomSignupInputSelected ? '0px 0px 8px 1px #3b3b3b40' : 'none'
                                    }} 
                                    onClick={() => {toggleBottomSignupInput(); bottomSignupInputRef.current.focus()}}
                                >
                                    <div className='placeholder' id='botom-signup-input'>
                                        <p id='bottom-signup-input'>{bottomSignupInputSelected ? 'Password' : ''}</p>
                                    </div>
                                    <div className='icon-final' id='bottom-signup-input'>
                                        <LockRoundedIcon 
                                            id='bottom-signup-input'
                                            style={{
                                                fontSize: '30px',
                                                color: bottomSignupInputSelected ? '#3b3b3b' : '#3b3b3b80'
                                            }}
                                        />
                                    </div>
                                    <div className='input-final' id='bottom-signup-input'>
                                        <input 
                                            type='password' 
                                            id='bottom-signup-input'
                                            ref={bottomSignupInputRef} 
                                            style={{color: bottomSignupInputSelected ? '#3b3b3b' : '#3b3b3bBF'}} 
                                            onChange={(event) => setNewPassword(event.target.value)}
                                            value={newPassword}
                                            placeholder={bottomSignupInputSelected ? '' : 'Password'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='button-box'>
                                <div className='button' onClick={() => handleSignup()}>
                                    <div className='text'>
                                        <p>Sign Up</p>
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
                        <div className='login'>
                            <p onClick={() => setLoginPage()}>Already have an account?<span style={{color: '#FE4A49', fontWeight: 600, cursor: 'pointer', userSelect: 'auto'}}> Sign in</span></p>
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