import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setInventory} from "../store/inventory";
// import "./styling/option.css"
import {optionDecider} from "../store/character";
import Inventory from "../components/Inventory";
import "./styling/option.css"

function Options () {
    const dispatch = useDispatch();
    const eventId = useParams();
    const [options, setOptions] = useState([]);
    const activeCharacterId = useSelector((state) => state.character.character);
    const items = useSelector((state) => state.inventory.inventory);
    const history = useHistory();

    useEffect(() => {
        async function fetchOptions(){
            const res = await fetch(`/api/option/${eventId.id}`)
            const resData = await res.json();
            setOptions(resData.options)
        }
        fetchOptions();
      }, []);

      const clicky = async (optionId) => {
        dispatch(optionDecider(activeCharacterId, optionId))
        history.push("/");
        // TODO dispatch setInventory again to instantly update inventory
      }

    return(
        <div>
            {/* <Inventory /> */}
            <div>Options</div>
                <div className="outer_option_box">
                    {options && options.map((option, index) => (
                        <div key={option.id} onClick={()=>clicky(option.id)}>
                            <div className="option_tile">
                                {option.name}
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Options;
