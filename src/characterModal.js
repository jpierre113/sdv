import './characterModal.css'
import {Component} from 'react';
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
    <Button onClick={() => {this.handleModal()}}> Open </Button>
    <Modal show={this.state.show}>
      <Modal.Header> Character Name </Modal.Header>
      <Modal.Body> sample text </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {this.handleModal()}}> Close </Button>
      </Modal.Footer>
    </Modal>
    </div>

    );
  }
}

export default CharacterModal;
