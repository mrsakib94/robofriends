import CounterButton from './CounterButton';
import React from 'react';
import { shallow } from 'enzyme';

const mockColor = 'red';

describe('CounterButton', () => {
  it('renders without crashing', () => {
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
  });

  it('correnctly increments the counter', () => {
    const wrapper = shallow(<CounterButton color={mockColor}/>)
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[id="counter"]').simulate('click');
    expect((wrapper.state())).toEqual({ count: 1 })
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect((wrapper.state())).toEqual({ count: 3 });
    expect((wrapper.props().color)).toEqual(mockColor);
  });
});