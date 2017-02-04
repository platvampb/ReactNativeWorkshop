import * as FirebaseApi from '../api/firebaseApi';
import * as giphyApi from '../api/giphyApi';

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LIKE_REQUESTED = 'LIKE_REQUESTED';
export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

export const DISLIKE = 'DISLIKE';

export const GET_LIKES_REQUESTED = 'GET_LIKES_REQUESTED';
export const GET_LIKES_SUCCESS = 'GET_LIKES_SUCCESS';
export const GET_LIKES_FAILURE = 'GET_LIKES_FAILURE';

export const GET_GIFS_REQUESTED = 'GET_GIFS_REQUESTED';
export const GET_GIFS_SUCCESS = 'GET_GIFS_SUCCESS';
export const GET_GIFS_FAILURE = 'GET_GIFS_FAILURE';

export const SET_CATEGORY = 'SET_CATEGORY';

/**
 * TODO Step 6:
 *
 * 1. Add FirebaseApi.createUser to login action handler
 * 2. Add FirebaseApi.like to like action handler
 * 3. Add FirebaseApi.getLikes to getLikes action handler
 */

/**
 * Login
 *
 * @param username
 */
export function login(username) {
  return (dispatch) => {

    dispatch(loginRequested());

    //1. Delete loginSuccess dispatch below 
    dispatch(loginSuccess(username));
    
    /*1. Implement Login FirebaseApi functionality here

    FirebaseApi.createUser(username)
      .then((results) => {
        dispatch(loginSuccess(username));    
      }); 

    */

  };
};

export function loginRequested() {
  return {
    type: LOGIN_REQUESTED
  };
};

export function loginSuccess(username) {
  return {
    type: LOGIN_SUCCESS,
    payload: { username }
  };
};

export function loginFailure(error) {
  return{
    type: LOGIN_FAILURE,
    payload: { error }
  }
}

/**
 * Like a gif
 *
 * @param gif 
 */
export function like(gif) {
  return (dispatch, getState) => {

    /*1. Uncomment Me

    let { username } = getState().user;

    */

    dispatch(likeRequested());

    //2. Delete loginSuccess dispatch below 
    dispatch(likeSuccess(gif));

    /*2. Implement like FirebaseApi functionality here

    FirebaseApi.like(username, gif)
      .then((result) => {
        dispatch(likeSuccess(gif));    
      });

    */
  };
};

export function likeRequested() {
  return {
    type: LIKE_REQUESTED
  };
};

export function likeSuccess(gif) {
  return {
    type: LIKE_SUCCESS,
    payload: { gif }
  };
};

export function likeFailure(error) {
  return{
    type: LIKE_FAILURE,
    payload: { error }
  }
}

/**
 * Dislike a gif
 *
 * @param gifId
 */
export function dislike(gif) {
  return{
    type: DISLIKE,
    payload: { gif }
  }
};

/**
 * Get Gifs by Likes
 *
 * @param category
 */
export function getLikes() {
  return (dispatch, getState) => {

    /*3. Uncomment Me

    let { username } = getState().user;

    */

    //3. Delete gifs object below.
    let gifs = {
      1: {id: 1, uri: 'https://i.giphy.com/xThuWg7lusylvpAVu8.gif'},
      2: {id: 2, uri: 'https://i.giphy.com/l2YWeYNrD6P5nCiCA.gif'},
      3: {id: 3, uri: 'https://i.giphy.com/xTk9ZZCndSIbxjRO8w.gif'},
      4: {id: 4, uri: 'https://media.giphy.com/media/26FLeFK9dfmg6xq12/source.gif'},
      5: {id: 5, uri: 'https://i.giphy.com/3ohfFn9vOub5BsZZ0k.gif'}
    };

    dispatch(getLikesRequested());

    //3. Delete getLikesSuccess dispatch below 
    dispatch(getLikesSuccess(gifs));

    /*3. Implement getLikes FirebaseApi functionality here

    FirebaseApi.getLikes(username)
      .then((results) => {
        dispatch(getLikesSuccess(results));    
      });

    */

  };
};

export function getLikesRequested() {
  return {
    type: GET_LIKES_REQUESTED
  };
};

export function getLikesSuccess(gifs) {
  return {
    type: GET_LIKES_SUCCESS,
    payload: { gifs }
  };
};

export function getLikesFailure(error) {
  return{
    type: GET_LIKES_FAILURE,
    payload: { error }
  }
}

/**
 * Get Gifs by Category
 *
 * @param category
 */
export function getGifs(category) {
  return (dispatch) => {
   giphyApi.getGiphyGifs(category).then((result) => { //retrieving the gifs by calling the api
     dispatch(getGifsSuccess(result.data)); //dispatching the success
    }).catch((error) => {
      dispatch(getGifsFailure(error));
    })
  };
};

export function getGifsRequested() {
  return {
    type: GET_GIFS_REQUESTED
  };
};

export function getGifsSuccess(gifs) {
  return {
    type: GET_GIFS_SUCCESS,
    payload: { gifs }
  };
};

export function getGifsFailure(error) {
  return{
    type: GET_GIFS_FAILURE,
    payload: { error }
  }
}

/**
 * Set Gif Category
 */
export function setCategory(category) {
  return{
    type: SET_CATEGORY,
    payload: { category }
  }
}
