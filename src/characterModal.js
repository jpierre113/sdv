import './characterModal.css'
import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class CharacterModal extends Component {
  constructor() {
    super()
    this.state={
      show:false
    }
  }

  handleModal(){
    this.setState({show:!this.state.show})
  }

render(){
  return (
    <div>
    <Button variant="success" onClick={() => {this.handleModal()}}> Open </Button>
    <Modal show={this.state.show} centered>
      <Modal.Header> {this.props.title} </Modal.Header>
      <Modal.Body> {this.props.about} </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {this.handleModal()}}> Close </Button>
      </Modal.Footer>
    </Modal>
    </div>

    );
  }
}

export default CharacterModal;
