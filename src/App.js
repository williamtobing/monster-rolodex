import React from "react";

import Fade from "react-reveal/Fade";

import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      seacrhField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ seacrhField: e.target.value });
  };

  render() {
    const { monsters, seacrhField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(seacrhField.toLowerCase())
    );
    return (
      <div className="App">
        <Fade bottom cascade>
          <h1> Monsters Rolodex </h1>
        </Fade>
        <Fade bottom>
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
        </Fade>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
