import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  TOGGLE_SETTINGS
} from './constants';

const initialState = {
  isOpenSidebar: false,
  isOpenSettings: false,
};

const uiReducerMap = {
  [CLOSE_SIDEBAR]: (state, action) => {
    return { ...state, isOpenSidebar: false };
  },
  [OPEN_SIDEBAR]: (state, action) => {
    return { ...state, isOpenSidebar: true };
  },
  [TOGGLE_SETTINGS]: (state, action) => {
    return { ...state, isOpenSettings: !state.isOpenSettings };
  },
};

export default function ui(state = initialState, action) {
  const reducer = uiReducerMap[action.type];
  if (!reducer) {
    return state;
  }

  return reducer(state, action);
}
