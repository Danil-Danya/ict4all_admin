import axios from 'axios';
const env = import.meta.env;

console.log(env.VITE_APP_BASE_URL);

const api = axios.create({
    baseURL: env.VITE_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})

const login = async (data) => {
    try {
        const response = await api.post('login', data);
        return response;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getAllUsers = async (params) => {
    try {
        const response = await api.get('users', {
            params
        });
        return response;
    }
    catch (error) {
        console.log(error);
        return error
    }
}

const getOneUser = async (id) => {
    try {
        const response = await api.get(`users/${id}`);
        return response;
    }
    catch (error) {
        console.log(error);
        return error
    }
}

const deleteUser = async () => {

}

const getMentors = async (params) => {
    console.log(params);
    
    try {
        const response = await api.get('mentors', {
            params
        }); 

        console.log(response);
        
        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const deleteMentors = async () => {
    try {
        const response = await api.get('mentors', {
            params
        }); 

        console.log(response);
        
        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getAllCategories = async (params) => {
    try {
        const response = await api.get('course-categories', {
            params
        }); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getOneCategory = async (id) => {
    try {
        const response = await api.get(`course-category/${id}`); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const deleteCoursesCategory = async () => {
    
}

const getAllCourses = async (params) => {
    try {
        const response = await api.get('courses', {
            params
        }); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getOneCourse = async (id) => {
    try {
        const response = await api.get(`courses/${id}`); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const deleteCourses = async () => {

}

const getAllRequests = async (params) => {
    try {
        const response = await api.get('request', {
            params
        })

        return response;
    }
    catch (error) {
        console.log(error);
        return error
    }
}

const getOneRequest = async (id) => {
    try {
        const response = await api.get(`request/${id}`);
        return response;
    }
    catch (error) {
        console.log(error);
        return error
    }
}

const getAllEvents = async (params) => {
    try {
        const response = await api.get('events', {
            params
        }); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getOneEvent = async (id) => {
    try {
        const response = await api.get(`events/${id}`); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getAllSessions = async (params) => {
    try {
        const response = await api.get('zoom-sessions', {
            params
        }); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

const getOneSession = async (id) => {
    try {
        const response = await api.get(`zoom-sessions/${id}`); 

        return response
    }
    catch (error) {
        console.log(error);
        return error;
    }
}


const createMentor = async (data, params) => {
    const response = await api.post('/mentors', data, {
        params
    })

    return response;
}

export {
    api,
    login,
    getAllUsers,
    getOneUser,
    getMentors,
    getAllRequests,
    getOneRequest,
    getAllCategories,
    getOneCategory,
    getOneCourse,
    getAllCourses,
    getAllEvents,
    getOneEvent,
    getAllSessions,
    getOneSession,
    createMentor
}