const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = ()=> ({
  type: REMOVE_USER,
})


export const createUser = (user) => async (dispatch) => {
    // const { firstName, lastName, email, password } = user;
    const res = await fetch(`/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    dispatch(setUser(data));
};



const initialState = { user: null };

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case SET_USER:
        return { ...state, user: action.payload };
      case REMOVE_USER:
        return {...state, user: null}
      default:
        return state;
    }
  }

  export default reducer;
