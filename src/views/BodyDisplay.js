import React, { useEffect, useState } from 'react';
import Button from 'muicss/lib/react/button';
import axios from 'axios';
import { fetchJSON } from '../Hooks/LocalRequest';
import{
  slice01, slice02, slice03, id, idade,
} from '../localStorage/messageBody.json';


//get default info to app
const appInfo = require('../appInfo.json')

//Component Init
function BodyDisplay(props) {
  const [dogImage, setDogImage] = useState({})
  const [dogData, setDogData] = useState([])
  const [info, setInfo] = useState({
    display: 0,
  })
  useEffect( ()=> {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      setDogImage(response)
  })
    fetchJSON(Math.floor((Math.random() * 999) + 1)).then((response) => {
      setDogData(response)
    })
}, [info.display])

  //Init content and generate random index
  let content = null;

  //refresh data
  let rDog = Math.floor((Math.random() * 10) + 3)

  //Star state of bodyContent
  if (info.display === 0) {
    content =
      <div className='response0' >
        <div  className='questionContainer' >
            <h1 >{appInfo.stateZero.title01}</h1>
            <Button
              className='responseButton'
              variant="raised"
              onClick={e => setInfo({ display: 1 })}
            >❤ Busca Doguinho ❤
            </Button>
          
          <div className='responseApi'>
            <h2 >
              {appInfo.stateZero.title02}
            </h2>
            <div className='responseApiDiv'>
              <a target="_blank" rel="noopener noreferrer" href={appInfo.stateZero.link02}>{appInfo.stateZero.link01}</a>
            </div>
            <p >Retorna um Json / Collection de itens composto por:</p>
            <div>
              {/* {dogData.data} */}
              
              <ul >
                <li>Name:</li>
                <li>Foto:</li>
                <li>Idade:</li>
                <li>Id Canina:</li>
                <li>Cidade:</li>
                <li>Distrito:</li>
              </ul>
            </div>
            <p >Busca pelo id de 0 até 999</p>
            <div className='responseApiDiv'>
        
            </div>
          </div>

        </div>
      </div>
  }


  //Shows dog profile into bodyContent
  if (info.display !== 0) {
    return (
      content =
          <div>
            <div className='response1'>
            <div className='imgContainer'>
              <img className='img' src={dogData.imagelink} alt="Um Doguinho Fofo" />
            </div>
            <div className='infoContainer'>
              <h1>Nome</h1>
              <p>{id}<span>{dogData.identidade}</span></p>
              <p>{idade}<span>{dogData.idade}</span></p>
              <p>
                {slice01}
                <span>{dogData.cidade}</span>
                {slice02}
                {slice03}
              </p>
              <div className='buttonContainer' >
                    <Button
                    
                    className='responseButton' 
                    variant="raised"
                    size='small' onClick={e => setInfo({ display: rDog })}
                    >❤ Doguinho ❤
                    </Button>

                    <Button
                    className='responseButton'
                    variant="raised"
                    size='small' onClick={e => setInfo({ display: 0 })}
                    >Voltar
                    </Button>
              </div>
            </div>
            </div>
          </div>
    )

  }
  return (
    <div>
      {content}
    </div>
  )


}

export default BodyDisplay;

