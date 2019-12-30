import axios from 'axios';
import { PostLogin, GetClassListData } from '../actions';

const SERVER_IP = 'http://localhost:3000';
var authToken = localStorage.getItem('token')?localStorage.getItem('token'):''
var api = axios.create({
  baseURL: SERVER_IP,
  timeout: 10000,
  headers: {
    'content-type': 'Application/json'
  },
});
export const attendanceLogin = (body) => {
  console.log("API Call")
  return dispatch => {
    api.post('/login', body, { crossdomain: true }).then(response => {
      console.log("Login success",api);
      localStorage.setItem('token', response.data.token);
      dispatch(PostLogin(200))
    }).catch(error => {
      console.log('error is', JSON.stringify(error));
      dispatch(PostLogin(500))
    });
  }
}
export const getClassList = (body) => {
  console.log("API Call")
  let axiosConfig = { headers: { "Authorization": authToken } };
  return dispatch => {
    api.get('/class', axiosConfig).then(response => {
      console.log("Login success", JSON.stringify(response));
      dispatch(GetClassListData(response.data));
      // dispatch(PostLogin(200))
    }).catch(error => {
      dispatch(GetClassListData("Error"));
      // dispatch(PostLogin(500))
    });
  }
}