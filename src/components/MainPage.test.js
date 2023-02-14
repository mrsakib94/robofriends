import MainPage from './MainPage';
import React from 'react';
import { shallow } from 'enzyme';

let wrapper;

describe('MainPage', () => {
  beforeEach(() => {
    const mockProps = {
      isPending: false,
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('fileters robots', () => {
    const mockProps = {
      isPending: false,
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: 'a',
    };

    wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('fileters robots correctly', () => {
    const filteredRobots = [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }];

    const mockProps = {
      isPending: false,
      onRequestRobots: jest.fn(),
      robots: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }],
      searchField: 'Leanne',
    };

    wrapper = shallow(<MainPage {...mockProps} />)
    expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
  });

  it('fileters robots correctly 2', () => {
    const mockProps = {
      isPending: false,
      onRequestRobots: jest.fn(),
      robots: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }],
      searchField: 'Xavier',
    };
    
    wrapper = shallow(<MainPage {...mockProps} />)
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });
});