import { Button, Input, message } from "antd";


const SET_CHARACTER = "character/SET_CHARACTER"
const SET_CHARACTERS = "character/SET_CHARACTERS"
const REMOVE_CHARACTER = "character/REMOVE_CHARACTER"

export const setCharacters = (characters) => ({
    type: SET_CHARACTERS,
    payload: characters,
})

export const setCharacter = (character) => ({
    type: SET_CHARACTER,
    payload: character,
  });


// export const createCharacter = ({ characterName, characterUrl }) => async (
//     dispatch
//   ) => {
//     const res = await fetch("/api/character/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ characterName, characterUrl }),
//     });
//     const data = await res.json();
//     dispatch(setCharacter(data));
//   };

export const getAllCharacters = () => async (dispatch) =>{
    const res = await fetch("/api/character/");
    const data = await res.json();
    dispatch(setCharacters(data.characters))
};

export const optionDecider = (charId, optionId) => async (dispatch) =>{
    const res = await fetch(`/api/character/${charId}/${optionId}`);
    const data = await res.text()
    message.success(data)
    // console.log("option decider---", data)
    // dispatch(setCharacters(data.characters))
};


const initialState = { character: null, characters: {} };

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER:
      return { ...state, character: action.payload };
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    case REMOVE_CHARACTER:
    //ToDo
    default:
      return state;
  }
}

export default reducer;
