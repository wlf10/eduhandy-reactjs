import { combineReducers } from 'redux';

import Educations from './educations';
import Subjects from './subjects';

const AllReducers = combineReducers({
    educations: Educations,
    subjects: Subjects
});

export default AllReducers;
