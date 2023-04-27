const Reducer = (state, action) => {
  switch (action.type) {
    case "loginInit":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "loginValid":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "loginFailed":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "logOut":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    case "updateInit":
      return {
        ...state,
        isFetching: true,
      };
    case "updateValid":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "updateFailed":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
