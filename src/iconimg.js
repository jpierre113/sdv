import React, {Component} from 'react';

class Iconimg extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="CharacterContainer">
        <img src={this.props.photo} alt="Character's Appearance" />
      </div>
    );
  }
}

export default Iconimg;
