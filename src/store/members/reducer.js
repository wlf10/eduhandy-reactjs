import { ADD_MEMBER, DELETE_MEMBER, FETCH_MEMBERS } from './constants';

const initialState = {
  columns: [
    { title: 'Фамилия', field: 'surname' },
    { title: 'Имя', field: 'name' },
    { title: 'Отчество', field: 'secondname' },
  ],
  data: [
    { name: 'Т', surname: 'Чумаковская', secondname: 'И'},
    { name: 'М', surname: 'Черкас', secondname: 'К'},
    { name: 'Е', surname: 'Москальонов', secondname: 'Д'},
    { name: 'В', surname: 'Михайлова', secondname: 'А'},
    { name: 'Н', surname: 'Иванова', secondname: 'Б'},
    { name: 'С', surname: 'Шушарина', secondname: 'С'},
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
