import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createInventory, setInventory} from "../store/inventory";
import { useParams } from "react-router-dom";
// import "./styling/option.css"

function Inventory () {
    const dispatch = useDispatch();
    // const eventId = useParams();
    // const [inventory, setInventory] = useState([]);
    const inventory = useSelector((state) => state.inventory.inventory);
    const activeCharacter = useSelector((state) => state.character.character);
    const characterInfo = useSelector((state)=> state.character.characters);
    console.log("--CHARACTERINFO----", characterInfo)

    useEffect(() => {
        async function fetchInventory(){
            if (activeCharacter){
                const res = await fetch(`/api/character/${activeCharacter}/items`)
                const resData = await res.json();
                console.log("Inventory_______", resData)
                dispatch(setInventory(resData.items))
            }
        }
        fetchInventory();
        // console.log("---eventID----", eventId)
        // const loc_ev = dispatch(seeLocationEvents(eventId.id));
        // console.log("!!!!!!", loc_ev)
      }, [activeCharacter]);


    // const onInventoryCreation = async (e) => {
    //     e.preventDefault();
    //     dispatch(createInventory({characterInfo}))
    // }

    return(
        // onLoad={onInventoryCreation()}
        <div >
            <div>Inventory</div>
            <div className="outer_inventory_box">
                {inventory && inventory.map((item) => (
                    <div key={item.id} className="inventory_tile">
                        INVENTORY
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Inventory;
