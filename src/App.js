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
          gender: "female"
        },
        {
          name: "Shane",
          photo: "./shane.png",
          gender: "male"
        }

      ]
    }
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
