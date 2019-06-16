import { ADD_ROOM, DELETE_ROOM, FETCH_ROOMS } from './constants';

const initialState = {
  columns: [
    { title: 'Номер', field: 'num' }
  ],
  data: [
    { num: '236'},
    { num: '212'},
    { num: '411'},
    { num: '412'},
    { num: '221'},
    { num: '212'},
    { num: '219'},
    { num: '218'},
    { num: '323'},
    { num: '327'},
    { num: '313'},
    { num: '316'},
  ]
};

const roomReducerMap = {
	[ADD_ROOM]: (state, action) => {
		return state;
	},
	[DELETE_ROOM]: (state, action) => {
		return state;
	},
	[FETCH_ROOMS]: (state, action) => {
		return state;
	},
};

export default function rooms(state = initialState, action) {
  const reducer = roomReducerMap[action.type];
  if (!reducer) {
    return state;
  }

  return reducer(state, action);
}
