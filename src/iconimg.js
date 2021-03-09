import React, {Component} from 'react';

class Iconimg extends Component{
  render(){
    return(
      <div class="ImageContainer">

        <img src={this.props.avatar} alt=""/>
      </div>
    );
  }
}

export default Iconimg;
