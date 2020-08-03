import React from 'react';
import BodyDisplay from './BodyDisplay';
import { useAxiosGet } from '../Hooks/HttpRequests'



//componet init
function BodyContainer() {

    //get httpRequest response
    let dogData = useAxiosGet('http://bdoguinhoapi.herokuapp.com/doguinho/')
    //bugfixer NEED to build    
    const Data = require('../appInfo.json')

    // get data from response
    let dogArray = Data
    console.log('ioiioioiooi')
    
    
    return (
      // then to send as a props to next children component
      <BodyDisplay dogArray={dogArray} />
    )

}

export default BodyContainer;
