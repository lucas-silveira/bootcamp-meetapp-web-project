import produce from 'immer';

const INITIAL_STATE = {};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
