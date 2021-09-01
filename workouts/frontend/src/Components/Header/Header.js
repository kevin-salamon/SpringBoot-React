import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavMenu from '../NavMenu';

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
`;

const Header = ({
    navMenuShow
}) => {

    return (
        <StyledHeader
            navMenuShow={navMenuShow}
        >
            <NavMenu/>
        </StyledHeader>
    )
}

export default Header;