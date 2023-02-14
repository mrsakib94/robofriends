import * as reducers from './reducers';
import * as types from './constants';

const initialStateRobots = {
  isPending: false,
  robots: [],
};

const initialStateSearch = {
  searchField: '',
};

describe('searchRobots reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(
      {
        searchField: "",
      }
    );
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCH_FIELD,
        payload: 'abc',
      })
    ).toEqual(
      {
        searchField: "abc",
      }
    );
  });
});

describe('requestRobots reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(
      {
        error: '',
        isPending: false,
        robots: [],
      }
    );
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual(
      {
        isPending: true,
        robots: [],
      }
    );
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: '123',
          name: 'test',
          email: 'j@jmail.com',
        }]
      })
    ).toEqual(
      {
        robots: [{
          id: '123',
          name: 'test',
          email: 'j@jmail.com',
        }],
        isPending: false,
      }
    );
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: 'NOOO',
      })
    ).toEqual(
      {
        error: 'NOOO',
        robots: [],
        isPending: false,
      }
    );
  });
});