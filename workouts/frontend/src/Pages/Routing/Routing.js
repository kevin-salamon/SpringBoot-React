import React, { useEffect } from 'react';
import { getAllWorkouts } from '../../Utils/API';

const Routing = () => {

    useEffect(() => {
        getAllWorkouts().then(res => {
            console.log("RES", res.data);
        }).catch(err => {
            console.log("ERR", err);
        })
    }, []);

    return (
        <div>BEGIN</div>
    )
}

export default Routing;