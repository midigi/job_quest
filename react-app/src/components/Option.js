import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import "./styling/option.css"
import {optionDecider} from "../store/character";

function Options () {
    const dispatch = useDispatch();
    const eventId = useParams();
    const [options, setOptions] = useState([]);
    const activeCharacterId = useSelector((state) => state.character.character);
    const items = useSelector((state) => state.inventory.inventory);

    useEffect(() => {
        async function fetchOptions(){
            console.log("option page eventid", eventId)
            const res = await fetch(`/api/option/${eventId.id}`)
            const resData = await res.json();
            console.log("options_______", resData)
            setOptions(resData.options)
        }
        fetchOptions();
      }, []);

      const clicky = async (optionId) => {
        //   console.log("option---", optionId)
        console.log("charid---", activeCharacterId)
          dispatch(optionDecider(activeCharacterId, optionId))
      }

    return(
        <div>
            <div>Options</div>
                <div className="outer_option_box">
                    {options && options.map((option, index) => (
                        <button onClick={()=>clicky(option.id)}>
                            {console.log("option", option)}
                            <div key={option.id} className="option_tile">
                                <div className="option_name">{option.name}</div>
                            </div>
                        </button>
                    ))}
                </div>
        </div>
    )
}

export default Options;
