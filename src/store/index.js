import { combineReducers } from 'redux';

import Educations from './educations';
import Subjects from './subjects';
import Ui from './ui';

const AllReducers = combineReducers({
    educations: Educations,
    subjects: Subjects,
    ui: Ui
});

export default AllReducers;
