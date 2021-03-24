import React, {Component} from 'react';
import './App.css';
import CharacterCard from './characterCard.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      characters:[
        {
          name: "Abigail",
          photo: "./abigail.png",
          birthday: "Fall 13",
          about: "Abigail lives at the general store with her parents, Caroline and Pierre."
        },
        {
          name: "Alex",
          photo: "./alex.png",
          birthday: "Summer 13",
          about: "Alex loves sports, specifically gridball, and hanging out at the beach."
        },
        {
          name: "Caroline",
          photo: "./caroline.png",
          birthday: "Winter 7",
          about: "Caroline is a villager living in Stardew Valley. She lives with her husband Pierre and daughter Abigail at the General Store."
        },
        {
          name: "Clint",
          photo: "./clint.png",
          birthday: "Winter 26",
          about: "Clint is the blacksmith living in Stardew Valley. He is very aloof and tends to spend all day away from other villagers."
        },
        {
          name: "Elliot",
          photo: "./elliot.png",
          birthday: "Fall 5",
          about: "Elliott lives alone in a cabin on the beach. He is a writer who dreams of one day writing a magnificent novel."
        },
        {
          name: "Evelyn",
          photo: "./evelyn.png",
          birthday: "Winter 20",
          about: "Evelyn is George's wife and Alex's Grandmother. She is in charge of the community garden and can often be seen tending to it in nice weather."
        },
        {
          name: "Gunther",
          photo: "./gunther.png",
          birthday: "Unknown",
          about: "Gunther operates the entire Stardew Valley Museum & Library"
        },
        {
          name: "Robin",
          photo: "./robin.png",
          birthday: "Fall 21",
          about: "Robin is the local carpenter of Stardew Valley who is sent to greet you by Mayor Lewis when you first arrive in the valley. She can be found in the Carpenter's Shop where the player can buy house upgrades, new buildings, and home decorations."
        },
        {
          name: "Shane",
          photo: "./shane.png",
          birthday: "Spring 20",
          about:"Shane lives with his aunt Marnie and rents a room at her ranch, where he helps out by taking care of the chickens. He also works as a stock clerk at JoJaMart and spends his free time in the Stardrop Saloon."
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
                  about={character.about}
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
