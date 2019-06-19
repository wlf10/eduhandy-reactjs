import { combineReducers } from 'redux';

import Educations from './educations';
import Members from './members';
import Subjects from './subjects';
import Groups from './groups';
import Rooms from './rooms';
import Ui from './ui';
import Schedule from './schedule';

const AllReducers = combineReducers({
    educations: Educations,
    rooms: Rooms,
    members: Members,
    groups: Groups,
    ui: Ui,
    subjects: Subjects,
    schedule: Schedule
});

export default AllReducers;
