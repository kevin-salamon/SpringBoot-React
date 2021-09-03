import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavMenu from '../NavMenu';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { useHistory } from "react-router-dom";

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: ${props => props.navMenuShow ? '303px' : 0};
    height: 60px;
    width: ${props => props.navMenuShow ? 'calc(100% - 303px)' : '100%;'};
    background-color: #3b3b3b;
    box-shadow: 0px 2px 3px 0px #808080BF;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease all;
    border-bottom-left-radius: ${props => props.navMenuShow ? '3px' : '0px'};

    .nav-icon {
        position: absolute;
        top: 0;
        right: 10px;
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

const Header = ({
    navMenuShow
}) => {
    const history = useHistory();

    const returnToLogin = () => {
        history.push('/');
    }

    return (
        <StyledHeader
            navMenuShow={navMenuShow}
        >
            <NavMenu/>
            <div className='nav-icon' onClick={() => returnToLogin()}>
                <ExitToAppRoundedIcon 
                    style={{
                        fontSize: '48px',
                        color: 'white'
                    }}
                />
            </div>
            <div className='nav-icon' style={{right: '80px'}}>
                <AccountCircleRoundedIcon 
                    style={{
                        fontSize: '48px',
                        color: 'white'
                    }}
                />   
            </div>
        </StyledHeader>
    )
}

export default Header;