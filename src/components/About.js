import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'muicss/lib/react/button'

const appInfo = require('../appInfo.json')


const About = () =>  {
    return (
        <div className='response0'>
            <div className='aboutContainer'>
            <h2>Sobre esse app</h2>
            <p>{appInfo.about.aboutBody}<a href='https://dog.ceo/dog-api/'>Dog Api</a>{appInfo.about.aboutBody01}<a href='www.ibge.gov.br'>IBGE Api</a>
            {appInfo.about.aboutBody02}</p>
            <Link to='/'>
            <Button
                    className='responseButton'
                    variant="raised"
                    size='small' color="accent" 
                    >Voltar
                    </Button>
            
            </Link>
            </div>
        </div>
    )
}
export default About;