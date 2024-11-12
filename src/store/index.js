import { createStore } from 'vuex';

import users from './users/users.js';
import mentors from './mentors/mentors.js';
import request from './requests/request.js';
import categories from './categories/categories.js';
import courses from './courses/courses.js';
import events from './events/events.js';
import session from './session/session.js';

export default createStore({
    modules: {
        users,
        mentors,
        request,
        categories,
        courses,
        events,
        session
    }
})