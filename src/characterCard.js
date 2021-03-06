import React, {Component} from 'react';
import Iconimg from './iconimg';

class CharacterCard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className= "Container">
        <Iconimg />
        <p>{this.props.title}</p>
        <img src={this.props.photo}/>
      </div>

    );
  }
}

export default CharacterCard;
