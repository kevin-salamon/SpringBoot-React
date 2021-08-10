import React, { useEffect } from 'react';

const Routing = ({
    pageSelected,
    setPageSelected
}) => {

    useEffect(() => {
        console.log("USE EFFECT")
        setPageSelected('test state');
    }, [setPageSelected]);

    let chosenPage = null;
    switch (pageSelected) {
        case 'overview':
            chosenPage = null
            break;
        default:
            chosenPage = null
            break;
    }

    return (
        <div className='body'>
            {chosenPage}
        </div>
    )
}

export default Routing;