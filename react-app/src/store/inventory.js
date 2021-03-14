const SET_INVENTORY = "INVENTORY/setInventory";

export const setInventory = (inventory) => ({
    type: SET_INVENTORY,
    payload: inventory,
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


const initialState = { inventory: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INVENTORY:
      return { ...state, inventory: action.payload };
    default:
      return state;
  }
}