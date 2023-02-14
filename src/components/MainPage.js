import CardList from "../components/CardList";
import ErrorBoundary from '../components/ErrorBoundary';
import Header from './Header';
import React from "react";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const { isPending, onSearchChange } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {
            isPending ? <h1>Loading</h1> :
              <ErrorBoundary>
                <CardList robots={this.filterRobots()} />
              </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;