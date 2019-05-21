import { ADD_SUBJECT, DELETE_SUBJECT, FETCH_SUBJECT } from './constants';

const initialState = [
  {
    id: 1,
    name: 'Математика'
  },
  {
    id: 2,
    name: 'Информатика'
  }
];

export default function subjects(state = initialState, action) {
  if (action.type === ADD_SUBJECT) {
    return state;
  } else if (action.type === DELETE_SUBJECT) {
    return state;
  } else if (action.type === FETCH_SUBJECT) {
    return action.subjects;
  }

  return state;
}