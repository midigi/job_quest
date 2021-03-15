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
    // console.log("--CHARACTERINFO----", characterInfo)

    useEffect(() => {
        async function fetchInventory(){
            if (activeCharacter){
                const res = await fetch(`/api/character/${activeCharacter}/items`)
                const resData = await res.json();
                // console.log("Inventory_______", resData)
                dispatch(setInventory(resData.items))
            }
        }
        fetchInventory();
      }, [activeCharacter]);

    return(
        <div >
            <div>Inventory</div>
            <div className="outer_inventory_box">
                {inventory && inventory.map((item) => (
                    <div key={item.id} className="inventory_tile">
                        <div className="item_tile">
                            <div className="inventory_item">Name: {item.name}</div>
                            <div>Description: {item.description}</div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Inventory;
