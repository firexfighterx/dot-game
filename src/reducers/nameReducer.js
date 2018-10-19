import initialState from "./initialState";

const reducer = (state = initialState.name, action) => {
    return action.type === 'UPDATE_NAME' ? action.name : state;
};

export default reducer;