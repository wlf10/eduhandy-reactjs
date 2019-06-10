import { ADD_SUBJECT, DELETE_SUBJECT, FETCH_SUBJECT } from './constants';

const initialState = {
  columns: [
    { title: 'Name', field: 'name' },
    { title: 'Fullname', field: 'fullname' },
  ],
  data: [
    { name: 'Математика', fullname: 'Математика'},
    { name: 'Информатика', fullname: 'Информатика'},
  ],
};

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