const SET_INVENTORY = "INVENTORY/setInventory";
const SET_ITEMS = "INVENTORY/setItems";
const ADD_ITEM = "INVENTORY/addOneItem";

export const setInventory = (inventory) => ({
    type: SET_INVENTORY,
    payload: inventory,
  });

  export const setItems = (items) => ({
    type: SET_ITEMS,
    payload: items,
  });

  export const addOneItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
  });

export const createInventory = ({ characterInfo }) => async (
    dispatch
  ) => {
    const res = await fetch("/api/inventory/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ characterInfo }),
    });
    const data = await res.json();
    dispatch(setInventory(data));
};


const initialState = { inventory: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INVENTORY:
      return { ...state, inventory: action.payload };
    case SET_ITEMS:
      return { ...state, allItems: action.payload };
    case ADD_ITEM:
      return { ...state, inventory: [...state.inventory, action.payload]};
    default:
      return state;
  }
}
