import React, { useEffect } from 'react';

const Routing = ({
    pageSelected,
}) => {

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