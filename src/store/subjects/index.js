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
  if (action.type === 'ADD_SUBJECT') {
    return state;
  } else if (action.type === 'DELETE_SUBJECT') {
    return state;
  }

  return state;
}