import { ADD_GROUP, DELETE_GROUP, FETCH_GROUPS } from './constants';

const initialState = {
  columns: [
    { title: 'Имя', field: 'name' },
  ],
  data: [
    { name: 'ИС-31'},
    { name: 'ИС-41'},
  ],
};

const groupReducerMap = {
	[ADD_GROUP]: (state, action) => {
		return state;
	},
	[DELETE_GROUP]: (state, action) => {
		return state;
	},
	[FETCH_GROUPS]: (state, action) => {
		return state;
	},
};

export default function groups(state = initialState, action) {
  const reducer = groupReducerMap[action.type];
  if (!reducer) {
    return state;
  }

  return reducer(state, action);
}
