import React, { useState } from 'react'
import Button from 'muicss/lib/react/button'
import Divider from 'muicss/lib/react/divider'



//get default info to app
const appInfo = require('../appInfo.json')

//get message info Body
const mBody = require('../messageBody.json')

//Component Init
function BodyDisplay(props) {

  //Set default state to app
  const [info, setInfo] = useState({
    display: 0,
  })

  //Init content and generate random index
  let content = null;
  let rIndex = Math.floor((Math.random() * 1000) + 1)

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
            >❤ Buscar Doguinho ❤
            </Button>
          
          <div className='responseApi'>
            <h2 >
              {appInfo.stateZero.title02}
            </h2>
            <div className='responseApiDiv'>
              <a target="_blank" rel="noopener noreferrer" href={appInfo.stateZero.link01}>{appInfo.stateZero.link01}</a>
            </div>
            <p >Retorna um Json / Collection de itens composto por:</p>
            <div>
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
              <a target="_blank" rel="noopener noreferrer" href={appInfo.stateZero.link01 + rIndex} >
                {appInfo.stateZero.link01 + '/id'}
              </a>
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
              <img className='img' src={props.dogArray[rIndex].imagelink} alt="Um Doguinho Fofo" />
            </div>
            <div className='infoContainer'>
              <h1>{props.dogArray[rIndex].name}</h1>
              <p>{mBody.id} <span>{props.dogArray[rIndex].identidade}</span></p>
              <p>{mBody.idade}<span>{props.dogArray[rIndex].idade}</span></p>
              <p>
                {mBody.slice01}
                <span>{props.dogArray[rIndex].cidade}</span>
                {mBody.slice02}
                {mBody.slice03}
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

