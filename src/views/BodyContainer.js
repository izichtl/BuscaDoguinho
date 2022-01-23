import React from 'react';
import BodyDisplay from './BodyDisplay';
// eslint-disable-next-line no-unused-vars
import { useAxiosGet } from '../Hooks/HttpRequests'



//componet init
function BodyContainer() {

    //get httpRequest responsey
    //let dogData = useAxiosGet('http://bdoguinhoapi.herokuapp.com/doguinho/')
    // get data from response
    //let dogArray = dogData.data
    
    
    return (
      // then to send as a props to next children component
      <BodyDisplay />
      //dogArray={dogArray} />
    )

}

export default BodyContainer;
