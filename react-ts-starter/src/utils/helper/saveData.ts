import { userInfo, Pokemon } from "../types/projectTypes";
const userState = "userStateKey";
const pokeState = "pokeState";

export const saveUserStateToLocalStorage = (user: userInfo) => {
  localStorage.setItem(userState, JSON.stringify(user));
};

export const savePokeStateToLocalStorage = (pokemon: Pokemon) => {
  localStorage.setItem(pokeState, JSON.stringify(pokemon));
};

export const loadUserStateFromLocalStorage = () => {
  const state = localStorage.getItem(userState);
  return state ? (JSON.parse(state) as userInfo) : null;
};

export const loadPokeStateFromLocalStorage = () => {
  const state = localStorage.getItem(pokeState);
  return state ? (JSON.parse(state) as Pokemon) : null;
};

export const removeUserStateFromLocalStorage = () => {
  localStorage.removeItem(userState);
  localStorage.removeItem(pokeState);
};
