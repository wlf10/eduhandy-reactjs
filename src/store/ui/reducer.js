import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from './constants';

const initialState = {
  isOpenSidebar: false
};

export default function ui(state = initialState, { type }) {
  switch (type) {
    case CLOSE_SIDEBAR:
      return { ...state, isOpenSidebar: false };
    case OPEN_SIDEBAR:
      return { isOpenSidebar: true };
  }

  return state;
}
