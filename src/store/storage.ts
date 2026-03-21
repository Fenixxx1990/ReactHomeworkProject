import { type IUserPersistentState } from "./user.slice";

export function loadState<T>(key: string): T | undefined {
  try {
    const jsonState = localStorage.getItem(key);
    if (!jsonState) {
      return undefined;
    }
    return JSON.parse(jsonState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export function saveState<T>(state: T, key: string) {
  const stringState = JSON.stringify(state);
  localStorage.setItem(key, stringState);
}

export function loadUserState(key: string): IUserPersistentState {
  const usersData = loadState<IUserPersistentState[]>(key);
  const result = usersData?.find((user) => user.isLogined) ?? undefined;
  if (!result) {
    return { name: null, isLogined: false };
  }
  return { name: result.name, isLogined: result.isLogined };
}

export function saveUserState(state: IUserPersistentState, key: string) {
  const existingUsers = loadState<IUserPersistentState[]>(key) || [];
  const userIndex = existingUsers.findIndex((user) => user.name === state.name);

  if (userIndex !== -1) {
    existingUsers[userIndex] = state;
  } else {
    existingUsers.push(state);
  }

  existingUsers.forEach((user) => {
    if (user.name !== state.name) {
      user.isLogined = false;
    }
  });

  localStorage.setItem(key, JSON.stringify(existingUsers));
}
