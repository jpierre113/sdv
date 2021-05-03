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
          about: "Gunther operates the entire Stardew Valley Museum & Library."
        },
        {
          name: "Gus",
          photo: "./gus.png",
          birthday: "Summer 8",
          about: "Gus is the owner and chef of the Stardrop Saloon. He caters most of the events in town."
        },
        {
          name: "Hayley",
          photo: "./hayley.png",
          birthday: "Spring 14",
          about: "Haley loves taking photos with her camera and keeping up to date with all the latest fashion trends."
        },
        {
          name: "Harvey",
          photo: "./harvey.png",
          birthday: "Winter 14",
          about: "Harvey is the town doctor. He has a kind heart and a respected position in the community."
        },
        {
          name: "Jas",
          photo: "./jas.png",
          birthday: "Summer 4",
          about: "Jas often visits the library and studies before going out to play."
        },
        {
          name: "Jodi",
          photo: "./jodi.png",
          birthday: "Fall 11",
          about: "Jodi is the mother of Sam & Vincent. She juggles cooking, cleaning, and shopping, which are all part of her daily chores."
        },
        {
          name: "Leah",
          photo: "./leah.png",
          birthday: "Winter 23",
          about: "Leah lives alone in a small cabin just outside of Pelican Town (south of the farm). She loves to spend time outside, foraging for a wild meal, or simply enjoying the gifts of the season."
        },
        {
          name: "Lewis",
          photo: "./lewis.png",
          birthday: "Spring 7",
          about: "Lewis is the Mayor of Stardew Valley."
        },
        {
          name: "Linus",
          photo: "./linus.png",
          birthday: "Winter 3",
          about: "Linus lives in a tent north of the town above the carpenter shop on a cliff facing the river. He loves his solitary life though still longs to participate in town events."
        },
        {
          name: "Marnie",
          photo: "./marnie.png",
          birthday: "Fall 18",
          about: "Marnie loves animals and taking care of her farm. She is very good friends with Lewis."
        },
        {
          name: "Maru",
          photo: "./maru.png",
          birthday: "Fall 18",
          about: "Maru Maru grew up with a carpenter and a scientist for parents and she acquired a passion for creating gadgets at a young age. When she isn’t in her room, fiddling with tools and machinery, she sometimes does odd jobs at the local clinic."
        },
        {
          name: "Robin",
          photo: "./robin.png",
          birthday: "Fall 21",
          about: "Robin is the local carpenter of Stardew Valley who is sent to greet you by Mayor Lewis when you first arrive in the valley. She can be found in the Carpenter's Shop where the player can buy house upgrades, new buildings, and home decorations."
        },
        {
          name: "Sebastian",
          photo: "./sebastian.png",
          birthday: "Winter 10",
          about: "Sebastian lives in the carpenter's shop with his mom Robin, his half-sister Maru, and his stepfather Demetrius."
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
