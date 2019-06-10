import { ADD_MEMBER, DELETE_MEMBER, FETCH_MEMBERS } from './constants';

const initialState = {
  columns: [
    { title: 'Имя', field: 'name' },
    { title: 'Фамилия', field: 'surname' },
    { title: 'Отчество', field: 'secondname' },
  ],
  data: [
    { name: 'Татьяна', surname: 'Ч', secondname: 'И'},
    { name: 'Михаил', surname: 'Ч', secondname: 'К'},
  ],
};

export default function subjects(state = initialState, action) {
  if (action.type === ADD_MEMBER) {
    return state;
  } else if (action.type === DELETE_MEMBER) {
    return state;
  } else if (action.type === FETCH_MEMBERS) {
    return action.members;
  }

  return state;
}