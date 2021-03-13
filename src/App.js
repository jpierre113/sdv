import React, {Component} from 'react';
import './App.css';
import CharacterCard from './characterCard.js';

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
      ]
    }
  }

  componentWillMount() {
        let key = "Robin";
    this.setState(prevState => ({
      characters: prevState.characters.map((character, index) => {
        return (
         key === character.name ? {...character, name: "Sebastian"} : character
       )
      })
    }))

  }


  render () {
    return (
      <div className="App">
          {
            this.state.characters.map((character, index) => {
              return (
                <CharacterCard
                  title={character.name}
                  photo={character.photo}
                  gender={character.gender}
                  //{...character}
                  key={index}
                />
              )
            })
          }

      </div>
    );
  }
}

export default App;
