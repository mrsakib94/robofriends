import CardList from './CardList';
import React from 'react';
import { shallow } from 'enzyme';

const mockRobots = [{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz'
}];

describe('CardList', () => {
  it('renders without crashing', () => {
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
  });
});