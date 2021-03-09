import React, {Component} from 'react';
import Iconimg from './iconimg.js';

class CharacterCard extends Component{
  render(){
    return(
      <div className= "Container">
        <Iconimg
        avatar={this.props.photo}
        />
        <p>{this.props.title}</p>
        <p>{this.props.gender}</p>
      </div>
    );
  }
}

export default CharacterCard;
