import { combineReducers } from 'redux';

import Educations from './educations';
import Subjects from './subjects';
import Sidebar from './sidebar';

const AllReducers = combineReducers({
    educations: Educations,
    subjects: Subjects,
    sidebar: Sidebar
});

export default AllReducers;
