import './App.css';
import CardList from "../components/CardList";
import ErrorBoundary from '../components/ErrorBoundary';
import React, { useState, useEffect } from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: '',
  //   };
  // };
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }));
  // }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value });
    setSearchfield(event.target.value);
  };

  // const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;