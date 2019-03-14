import { GET_FRIENDS_LIST } from "../actionTypes/index";

export function getFriendsList() {
  return {
    type: GET_FRIENDS_LIST.GET_FRIENDS_LIST
  };
}
export default {
  getFriendsList
};
