import * as actions from './actions';
import * as types from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchfield actions', () => {
  it('should create an action to search', () => {
    const text = 'finish docs';
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text,
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots actions", () => {
  it("should creat a pending action on request robots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    
    const action = store.getActions();
    expect(action[0]).toEqual({ type: "REQUEST_ROBOTS_PENDING" });
  });
});