import React from 'react'
import Links from './Links'




function Footer(props){
    let LinkA = {
        texto: 'Desenvolvido com ❤ por Ivan Zichtl',
        href: 'http://github.com/izichtl',
        textoTag: ' GitHub',
        textoTag01: ' Sobre'
    }
   
        
    return (
        <div className='footer'>

        
            <Links {...LinkA}/>
            
            
            
     
            
        </div>
    );
}

export default Footer;
