import './App.css';
import CardList from "../components/CardList";
import ErrorBoundary from '../components/ErrorBoundary';
import React from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import { connect } from 'react-redux';
import { setSearchfield, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    searchField: state.searchRobots.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots()),
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
  }
}

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: '',
  //   };
  // };
  // const [robots, setRobots] = useState([]);
  // const [searchfield, setSearchfield] = useState('');

  componentDidMount() {
    this.props.onRequestRobots();
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
    const { searchField, onSearchChange, robots } = this.props;
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