import './App.css';
import CardList from "../components/CardList";
import ErrorBoundary from '../components/ErrorBoundary';
import React from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { setSearchfield } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      // searchfield: '',
    };
  };
  // const [robots, setRobots] = useState([]);
  // const [searchfield, setSearchfield] = useState('');

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => setRobots(users));
  // }, []);

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  //   // setSearchfield(event.target.value);
  // };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);