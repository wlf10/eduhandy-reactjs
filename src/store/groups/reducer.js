import { ADD_GROUP, DELETE_GROUP, FETCH_GROUPS } from './constants';

const initialState = {
  columns: [
    { title: 'Имя', field: 'name' },
  ],
  data: [
    { name: 'АС-11'},
    { name: 'ИС-11'},
    { name: 'ИСП-11'},
    { name: 'ТМ-11'},
    { name: 'ТЭ-11'},
    { name: 'ЭО-11'},
    { name: 'ПСО-11'},
    { name: 'АС-21'},
    { name: 'ИСП-21'},
    { name: 'ИС-21'},

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
