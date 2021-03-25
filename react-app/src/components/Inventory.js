import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setItems, setInventory} from "../store/inventory";
import "./styling/inventory.css";
import 'antd/dist/antd.css';
import { Popover, message } from 'antd';
// import "./styling/option.css"

function Inventory () {
    const dispatch = useDispatch();
    // const eventId = useParams();
    // const [inventory, setInventory] = useState([]);
    const inventory = useSelector((state) => state.inventory.inventory);
    const allItems = useSelector((state) => state.inventory.allItems);
    const activeCharacter = useSelector((state) => state.character.character);
    const characterInfo = useSelector((state)=> state.character.characters);

    useEffect(() => {
        async function fetchInventory(){
            if (activeCharacter){
                const res = await fetch(`/api/character/${activeCharacter}/items`)
                const resData = await res.json();
                dispatch(setInventory(resData.items))
            }
        }
        fetchInventory();
      }, [activeCharacter]);

    useEffect(()=> {
        async function fetchItems(){
            if(activeCharacter){
                const res = await fetch(`/api/inventory/`)
                const resData = await res.json();
                dispatch(setItems(resData.allItems))
            }
            else{
                message.error("Set an active character")
            }
        }
        fetchItems();
    }, [activeCharacter, inventory]);

    const addColor = (special) => {
        const color = document.getElementsByTagName("img");
        for(let each of color) {
            if (each.src === special){
                each.classList.add("item_img");
            }

        }
    }

    return(
        <div className="outer-outer">
            <div className="outer_inventory_box">
                {allItems && allItems.map((item) => (
                     <div key={item.id} className="inventory_tile">
                        <div className="item_tile">
                            <Popover content={
                                <>
                                    <div>Name: {item.name}</div>
                                    <div>Description: {item.description}</div>
                                </>
                            }>
                            <img className={ inventory && (inventory.map(el => el.id ).includes(item.id) ? "item_img" : "item_img_grey")} src={item.pic_url} />
                            </Popover>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inventory;
