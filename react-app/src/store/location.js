const GET_LOCATION = "location/getLocation";
// const GET_LOCATION_EVENT = "location/getLocationEvent";

const getLocation = (location) => ({
    type: GET_LOCATION,
    payload: location
});

// const getLocationEvent = (event) => ({
//   type: GET_LOCATION_EVENT,
//   payload: event
// })

export const seeLocation = () => async (dispatch) => {
    const res = await fetch("/api/location/");
    const data = await res.json();
    // console.log("-------thunk for location-----", data.locations)
    dispatch(getLocation(data.locations));
};

// export const seeLocationEvents = (id) => async (dispatch) => {
//   const res = await fetch(`/api/location/${id}/events`);
//   const data = await res.json();
//   console.log("-------thunk for location EVENTS-----", data.events)
//   dispatch(getLocation(data.events));
// };


const initialState = { task: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATION:
        // console.log("-------reducer for location-----")
        return { ...state, task: action.payload };
    default:
        return state;
  }
}

export default reducer;
