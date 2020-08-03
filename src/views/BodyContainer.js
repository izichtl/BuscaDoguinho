import React from 'react';
import BodyDisplay from './BodyDisplay';
import { useAxiosGet } from '../Hooks/HttpRequests'



//componet init
function BodyContainer() {

    //get httpRequest response
    let dogData = useAxiosGet('http://localhost:8080/doguinho/')

    // get data from response
    let dogArray = dogData.data
    
    
    
    return (
      // then to send as a props to next children component
      <BodyDisplay dogArray={dogArray} />
    )

}

export default BodyContainer;
