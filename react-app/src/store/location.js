const GET_LOCATION = "location/getLocation";

const getLocation = (location) => ({
    type: GET_LOCATION,
    payload: location
});

export const seeLocation = () => async (dispatch) => {
    const res = await fetch("/api/location/");
    const data = await res.json();
    dispatch(getLocation(data.locations));
};

const initialState = { task: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
        return { ...state, task: action.payload };
    default:
        return state;
  }
}

export default reducer;
