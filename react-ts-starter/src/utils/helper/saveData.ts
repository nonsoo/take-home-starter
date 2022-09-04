import { userInfo } from "../types/projectTypes";
const userState = "userStateKey";

export const saveUserStateToLocalStorage = (user: userInfo) => {
  localStorage.setItem(userState, JSON.stringify(user));
};

export const loadUserStateFromLocalStorage = () => {
  const state = localStorage.getItem(userState);
  return state ? (JSON.parse(state) as userInfo) : null;
};

export const removeUserStateFromLocalStorage = () => {
  localStorage.removeItem(userState);
};
