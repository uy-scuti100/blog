export const LoginInit = (userCredentials) => ({
  type: "LOGIN_INIT",
});
export const LoginValid = (user) => ({
  type: "LOGIN_VALID",
  payload: user,
});
export const LoginFailed = () => ({
  type: "LOGIN_FAILED",
});
export const LogOut = () => ({
  type: "LOGOUT",
});

export const UpdateInit = (userCredentials) => ({
  type: "UPDATE_INIT",
});
export const UpdateValid = (user) => ({
  type: "UPDATE_VALID",
  payload: user,
});
export const UpdateFailed = () => ({
  type: "UPDATE_FAILED",
});
