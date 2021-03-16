import React, {Component} from 'react';
import './App.css';
import CharacterCard from './characterCard.js';
import CharacterModal from './characterModal.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters:[
        {
          name: "Robin",
          photo: "./robin.png",
          gender: "female",
          birthday: "Fall 21",
          about: "Robin is the local carpenter of Stardew Valley who is sent to greet you by Mayor Lewis when you first arrive in the valley. She can be found in the Carpenter's Shop where the player can buy house upgrades, new buildings, and home decorations."
        },
        {
          name: "Shane",
          photo: "./shane.png",
          gender: "male",
          birthday: "Spring 20",
          about:"Shane lives with his aunt Marnie and rents a room at her ranch, where he helps out by taking care of the chickens. He also works as a stock clerk at JoJaMart and spends his free time in the Stardrop Saloon."
        }
      ],
      showCharacterModal:false
    }
  }

  setModalState(showCharacterModal) {
    this.setState({
      showCharacterModal: showCharacterModal
    });
  }

  render () {
    return (
      <div className="App">
          {
            this.state.characters.map((character, index) => {
              return (
                <CharacterCard
                  title={character.name}
                  photo={character.photo} onClick={this.setModalState.bind(this, true)}
                  gender={character.gender}
                  //{...character}
                  key={index}

                />
              )
            })
            <CharacterModal isOpen={ this.state.showCharacterModal }>
              <img src={ character.photo } onClick={ this.setModalState.bind(this, false) } />
            </CharacterModal>
          }

      </div>
    );
  }
}

export default App;
