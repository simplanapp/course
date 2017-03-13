import axios from 'axios';
import firebase from 'firebase';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_FIREBASE = 'FETCH_FIREBASE';
export const SEARCH_CURSES = 'SEARCH_CURSES';
export const SEARCH_CURSES_SUB='SEARCH_CURSES_SUB';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const HEROKU_URL='https://blooming-savannah-34852.herokuapp.com'
const API_KEY = '?key=lkajdsfapipwietpw';
// var config = {
//     apiKey: "AIzaSyDHXX6SsbLgm9yjkIJXGRR3wpsdpnx_iJU",
//     authDomain: "simplan-alpha.firebaseapp.com",
//     databaseURL: "https://simplan-alpha.firebaseio.com",
//     storageBucket: "simplan-alpha.appspot.com",
//     messagingSenderId: "320788806474"
//   };
//   firebase.initializeApp(config);

// export function fetchFirebase() {
//   firebase.database().ref().child('eventDetails').once('value').then((snapshot)=> {
//
//   const app =snapshot.val();
//   return {
//     type : FETCH_FIREBASE,
//     payload: app
//   }
// })
// }
var instance = axios.create({
   baseURL: 'https://blooming-savannah-34852.herokuapp.com',
   timeout: 1000,
   headers: {'Access-Control-Allow-Origin': '*'}
 });
export function searchCurses(props) {
   const request =axios.get(`${HEROKU_URL}/curses?name=${props.title}`);
  //  console.log("555555555555");
  //  console.log(props);
  return {
    type: SEARCH_CURSES,
    payload: request
  };
}
export function searchCursesSub(props) {
   const request =axios.get(`${HEROKU_URL}/cursesSub`);
console.log(request);
  return {
    type: SEARCH_CURSES_SUB,
    payload: request
  };
}
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  };
}
