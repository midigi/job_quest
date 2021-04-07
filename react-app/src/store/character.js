import { Button, Input, message } from "antd";
import { addOneItem } from "./inventory";

const ADD_CHARACTER = "character/ADD_CHARACTER"
const SET_CHARACTER = "character/SET_CHARACTER"
const SET_CHARACTERS = "character/SET_CHARACTERS"
const REMOVE_CHARACTER = "character/REMOVE_CHARACTER"

export const setCharacters = (characters) => ({
    type: SET_CHARACTERS,
    payload: characters,
})

export const addCharacter = (character) => ({
  type: ADD_CHARACTER,
  payload: character,
})

export const setCharacter = (character) => ({
    type: SET_CHARACTER,
    payload: character,
  });

export const getAllCharacters = () => async (dispatch) =>{
    const res = await fetch("/api/character/");
    const data = await res.json();
    dispatch(setCharacters(data.characters))
};

export const optionDecider = (charId, optionId) => async (dispatch) =>{
    const res = await fetch(`/api/character/${charId}/${optionId}`);
    const data = await res.json()
    if(data.positive){
      message.success(data.positive)
      if(data.item){
        dispatch(addOneItem(data.item))
      }
    }
    if(data.negative){
      message.error(data.negative)
    }

};

export const createCharacter = ({
  user_id,
  characterName,
  characterUrl,
  locationId,
  stamina,
  mentalHealth,
  wisdom,
  intelligence,
}) => async (dispatch) => {
  const res = await fetch("api/character/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      name: characterName,
      pic_url: characterUrl,
      location_id: locationId,
      stamina,
      mental_health: mentalHealth,
      wisdom,
      intelligence,
    }),
  });
  const data = await res.json();
  const char = {}
  char[data.id] = data
  dispatch(setCharacter(data.id));
  dispatch(addCharacter(char));
};

export const deleteChar = (charId) => async (dispatch) => {
  const res = await fetch(`api/character/${charId}`, {
    method: "DELETE",
  });
  const deleted = await res.json();
  console.log(deleted)

  const char = await fetch("/api/character/");
  const data = await char.json();
  dispatch(setCharacters(data.characters))
}

const initialState = { character: null, characters: {} };

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHARACTER:
      return { ...state, character: action.payload };
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    case ADD_CHARACTER:
      return {...state, characters: {...state.characters, ...action.payload}}
    default:
      return state;
  }
}

export default reducer;
