import React, {Component} from 'react';
import Iconimg from './iconimg.js';
import CharacterModal from './characterModal.js';

class CharacterCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      showCharacterModal:false
    };
    this.showCharacterModal = this.showCharacterModal.bind(this);
    this.hideCharacterModal = this.hideCharacterModal.bind(this);
  }

showCharacterModal = () => {
  this.setState({show: true});
};

hideCharacterModal = () => {
  this.setState({show:false});
};

  render(){
    return(
      <div className= "characterContainer">
        <Iconimg
        avatar={this.props.photo}
        />
        <p>{this.props.title}</p>
        <CharacterModal show={this.state.show}
          handleClose={this.hideCharacterModal}
          about={this.props.about}
          title={this.props.title}>
        </CharacterModal>
      </div>
    );
  }
}

export default CharacterCard;
