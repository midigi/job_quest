const GET_LOCATION = "location/getLocation";

const getLocation = (location) => ({
    type: GET_LOCATION,
    payload: location
});

export const seeLocation = () => async (dispatch) => {
    const res = await fetch("/api/location/");
    const data = await res.json();
    console.log("-------thunk for location-----", data.locations)
    dispatch(getLocation(data.locations));
  };


const initialState = { task: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_LOCATION:
        console.log("-------reducer for location-----")
        return { ...state, task: action.payload };
    default:
        return state;
  }
}

export default reducer;
