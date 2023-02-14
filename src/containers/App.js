import './App.css';
import MainPage from '../components/MainPage';
import React from "react";
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../actions';

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
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    return <MainPage {...this.props}/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);