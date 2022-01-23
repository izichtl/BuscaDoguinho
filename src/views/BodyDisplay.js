import React, { useEffect, useState } from 'react';
import Button from 'muicss/lib/react/button';
import profile from '../img/profile.png'
import axios from 'axios';
import{
  slice01, slice02, slice03, id, idade,
} from '../localStorage/messageBody.json';


//get default info to app
const appInfo = require('../appInfo.json')

//Component Init
function BodyDisplay(props) {
  const [img, setImg] = useState(profile)
  const [gatilho, setGatilho] = useState(0)
  const [dogData, setDogData] = useState([])
  const [info, setInfo] = useState({
    display: 0,
  })

  useEffect( () => {
    if (gatilho !== 0) {
      const id = (Math.random() * 990).toFixed(0);
      axios.get(`https://busca-doguinho-api.vercel.app/doguinho/${id}`).then((response) => {
        setImg(response.data.imagelink)
        setDogData(response.data)
      })
    }
  }, [gatilho]);

  //Init content and generate random index
  let content = null;
  const clickHandler = () => {
    setGatilho(Math.random(10))
    setInfo({ display: 1 })
  }

  //Star state of bodyContent
  if (info.display === 0) {
    content =
      <div className='response0' >
        <div  className='questionContainer' >
            <h1 >{appInfo.stateZero.title01}</h1>
            <Button
              className='responseButton'
              variant="raised"
              onClick={ () => {
                clickHandler()
              }}
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
              <a target="_blank" rel="noopener noreferrer" href={appInfo.stateZero.link04}>{appInfo.stateZero.link03}</a>
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
              <img className='img' src={img} alt="Um Doguinho Fofo" />
            </div>
            <div className='infoContainer'>
              <h1>{dogData.name}</h1>
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
                    size='small' onClick={ () => {
                      clickHandler()
                    }}
                    >❤ Novo Doguinho ❤
                    </Button>

                    <Button
                    className='responseButton'
                    // variant="raised"
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

