import { combineReducers } from 'redux';

import Educations from './educations';
import Members from './members';
import Subjects from './subjects';
import Ui from './ui';

const AllReducers = combineReducers({
    educations: Educations,
    members: Members,
    subjects: Subjects,
    ui: Ui
});

export default AllReducers;
