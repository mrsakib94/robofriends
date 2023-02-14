import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('renders without crashing', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});