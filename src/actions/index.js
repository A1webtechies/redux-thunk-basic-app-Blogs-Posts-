import _ from "lodash";
import JSONAPI from "../api/JSONplaceholder";

export const fetchPostsAndUser = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const usersId = _.uniq(_.map(getState().posts, "userId"));
    usersId.forEach(id => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => async dispatch => {
  const res = await JSONAPI.get("/posts");

  dispatch({
    type: "FETCH_POST",
    payload: res.data
  });
};

export const fetchUser = id => async dispatch => {
  const res = await JSONAPI.get(`users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: res.data
  });
};

// Memoiezed Version
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await JSONAPI.get(`users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: res.data
//   });
// });
