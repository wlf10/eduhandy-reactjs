import { ADD_EDUCATION, DELETE_EDUCATION, UPDATE_EDUCATION } from './constants';

const initialState = {
  educations: [
    {
      id: 1,
      name: 'УЭМК'
    },
    {
      id: 2,
      name: 'УлГТУ'
    },
    {
      id: 3,
      name: 'УлГУ'
    }
  ]
};

const educationReducerMap = {
	[ADD_EDUCATION]: (state, action) => {
		return state;
	},
	[DELETE_EDUCATION]: (state, action) => {
		return state;
	},
	[UPDATE_EDUCATION]: (state, action) => {
		return state;
	},
};

export default function educations(state = initialState, action) {
  const reducer = educationReducerMap[action.type];
  if (!reducer) {
    return state;
  }

  return reducer(state, action);
}