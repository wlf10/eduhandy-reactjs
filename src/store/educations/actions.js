import * as types from './constants';

export function addEducation(name) {
  return {
    type: types.ADD_EDUCATION,
    name
  };
}
