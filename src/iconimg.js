import React, {Component} from 'react';

class Iconimg extends Component{
  render(){
    return(
      <div className="ImageContainer">

        <img src={this.props.avatar} alt=""/>
      </div>
    );
  }
}

export default Iconimg;
