import React, { useEffect } from 'react';
import styled from 'styled-components';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const StyledOverview = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s ease all;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: ${props => props.active ? '#3b3b3bFF' : '#3b3b3b00'};
    transform: ${props => props.active ? 'translateX(0px)' : 'translateX(-240px)'};
    box-shadow: ${props => props.active ? '2px 0px 3px 0px #808080BF' : 'none'};

    .toggle-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        height: 60px;
        width: 60px;
    }
`;

const NavMenu = ({
    navMenuShow,
    setNavMenuShow
}) => {

    const handleToggle = () => {
        setNavMenuShow(!navMenuShow);
    }

    return (
        <StyledOverview
            active={navMenuShow}
        >
            <div className='toggle-container'>
                <MenuRoundedIcon 
                    style={{
                        cursor: 'pointer',
                        color: 'white',
                        fontSize: '40px'
                    }}
                    onClick={() => handleToggle()}
                />
            </div>
        </StyledOverview>
    )
}

export default NavMenu;