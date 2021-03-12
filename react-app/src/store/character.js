
const setCharacter = (character) => ({
    type: SET_CHARACTER,
    payload: character,
  });


export const createCharacter = ({ characterName, characterUrl }) => async (
    dispatch
  ) => {
    const res = await fetch("/api/character/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ characterName, characterUrl }),
    });
    const data = await res.json();
    dispatch(setCharacter(data));
  };


const initialState = { character: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER:
      return { ...state, character: action.payload };
    case REMOVE_CHARACTER:
    //ToDo
    default:
      return state;
  }
}

export default reducer;
