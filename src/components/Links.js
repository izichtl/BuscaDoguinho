import React from 'react';
import {Link} from 'react-router-dom'



class Links extends React.Component {
    render(props) {
        
        return (
        
        <div className='footer'>
            
            <p>{this.props.texto}</p>
            <p>
            <Link
            className='footer' 
            to='/about'
            >{this.props.textoTag01}</Link>
            </p>
            <a target="_blank" rel="noopener noreferrer" 
            href={this.props.href}>
                {this.props.textoTag}
            </a>

            




        </div>
        )
      }

}

export default Links;


