import { combineReducers } from 'redux';
import Subjects from './subjects';

const AllReducers = combineReducers({
    subjects: Subjects
});

export default AllReducers;
