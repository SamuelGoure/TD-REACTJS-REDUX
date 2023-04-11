const initalState = {
  name: "Mathieu",
  lastName: "Koffi",
};

function rootReducer(state = initalState, action) {
  switch (action.type) {
    case "CHANGE-NAME": {
      return {
        ...initalState,
        name: action.payload.name,
        lastName: action.payload.lastName,
      };
    }
    default: {
      return state;
    }
  }
}
export default rootReducer;
