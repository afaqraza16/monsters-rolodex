import "./App.css";
import { Component } from "react";
import CardList from "./Components/CardList/CardList.jsx";
import Search from "./Components/Search-Box/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monster Rodolex</h1>
        <Search
          placeholder='search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// {
/* <button
onClick={() => this.setState({ string: "This is AFaq Raza" })}
>
Click Me
</button> */
// }
