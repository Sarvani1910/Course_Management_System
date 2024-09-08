import axios from 'axios';

export const fetchCourses = () => async (dispatch) => {
  const response = await axios.get('https://dummyapi.io/data/api/course');
  dispatch({ type: 'SET_COURSES', payload: response.data });
};

export const selectCourse = (course) => ({
  type: 'SET_SELECTED_COURSE',
  payload: course,
});

export const enrollCourse = (course) => ({
  type: 'ENROLL_COURSE',
  payload: course,
});