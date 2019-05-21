import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from './constants';

const initialState = {
  isOpen: false
};

export default function sidebar(state = initialState, { type }) {
  switch (type) {
    case CLOSE_SIDEBAR:
      return { ...state, isOpen: false };
    case OPEN_SIDEBAR:
      return { isOpen: true };
  }

  return state;
}