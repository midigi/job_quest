import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createInventory, setItems, setInventory} from "../store/inventory";
import { useParams } from "react-router-dom";
import "./styling/inventory.css";
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
// import "./styling/option.css"

function Inventory () {
    const dispatch = useDispatch();
    // const eventId = useParams();
    // const [inventory, setInventory] = useState([]);
    const inventory = useSelector((state) => state.inventory.inventory);
    const allItems = useSelector((state) => state.inventory.allItems);
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

    useEffect(()=> {
        async function fetchItems(){
            if(activeCharacter){
                const res = await fetch(`/api/inventory/`)
                const resData = await res.json();
                // console.log("api inventory------", resData)
                dispatch(setItems(resData.allItems))
            }
        }
        fetchItems();
    }, [activeCharacter]);

    const addColor = (special) => {
        const color = document.getElementsByTagName("img");
        for(let each of color) {
            if (each.src === special){
                each.classList.add("item_img");
                // each.classList.remove("item_img")
            }

        }
    }

    return(
        <div className="outer-outer">
            {/* <div className="inventory_title">Inventory</div> */}
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
                            {/* Might need to change inventory && to inventory ? and additional logic based on future test cases */}
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
