import React, { useEffect, useState } from "react";
// import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
// import "./styling/option.css"

function Inventory () {
    // const dispatch = useDispatch();
    // const eventId = useParams();
    const [inventory, setInventory] = useState([]);
    const [activeCharacter, setActiveCharacter] = useState(1);

    useEffect(() => {
        async function fetchInventory(){
            console.log("inventory page eventid", activeCharacter)
            const res = await fetch(`/api/character/${activeCharacter}/items`)
            const resData = await res.json();
            console.log("Inventory_______", resData)
            setInventory(resData.items)
        }
        fetchInventory();
        // console.log("---eventID----", eventId)
        // const loc_ev = dispatch(seeLocationEvents(eventId.id));
        // console.log("!!!!!!", loc_ev)
      }, []);

    const inventoryComponents = inventory.map((item) =>{
        return (
            <div key={item.id} className="inventory_tile">
                {/* <div className="inventory_name">{inventory.name}</div> */}
                HI
            </div>
        )
    })
    return(
        <div>
            <div>Inventory</div>
            <div className="outer_inventory_box">
                {inventoryComponents}
            </div>
        </div>
    )
}

export default Inventory;
