import { GET_FRIENDS_LIST } from "../actionTypes/index";

const initialState = {
  friendsList: [],
  text: "what?"
};
export default function(state = initialState, action) {
  console.log("reduces", action.type);
  switch (action.type) {
    case GET_FRIENDS_LIST.GET_FRIENDS_LIST_SUCCESS:
      return {
        ...state,
        friendsList: action.friendsList
      };
    default:
      return state;
  }
}
