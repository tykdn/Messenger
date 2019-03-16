import { GET_FRIENDS_LIST, SEARCH } from "../actionTypes/index";

function getFriendsList() {
  return {
    type: GET_FRIENDS_LIST.GET_FRIENDS_LIST
  };
}
export function search(text) {
  return {
    type: SEARCH,
    text
  };
}
export default {
  getFriendsList,
  search
};
