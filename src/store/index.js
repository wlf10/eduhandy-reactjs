import { combineReducers } from 'redux';

import Educations from './educations';
import Members from './members';
import Subjects from './subjects';
import Groups from './groups';
import Ui from './ui';

const AllReducers = combineReducers({
    educations: Educations,
    members: Members,
    groups: Groups,
    subjects: Subjects,
    ui: Ui
});

export default AllReducers;
