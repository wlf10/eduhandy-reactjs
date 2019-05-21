import { ADD_SUBJECT, DELETE_SUBJECT, FETCH_SUBJECT } from './constants';
import axios from 'axios';

const apiUrl = 'https://rasp.bitwolff.com/api/v1/subjects/';

export const fetchSubjects = (subjects) => {
  return {
    type: FETCH_SUBJECT,
    subjects
  }
};

export const fetchAllSubjects = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchSubjects(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
