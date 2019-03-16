import { GET_FRIENDS_LIST, SEARCH } from "../actionTypes/index";

const initialState = {
  friendsList: [],
  text: ""
};
export default function(state = initialState, action) {
  console.log("reduces", action.type);
  switch (action.type) {
    case GET_FRIENDS_LIST.GET_FRIENDS_LIST_SUCCESS:
      return {
        ...state,
        friendsList: action.friendsList
      };
    case SEARCH:
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
}
