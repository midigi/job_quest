import React, { useEffect, useState } from "react";
// import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
// import "./styling/option.css"

function Options () {
    // const dispatch = useDispatch();
    const eventId = useParams();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        async function fetchOptions(){
            console.log("option page eventid", eventId)
            const res = await fetch(`/api/option/${eventId.id}`)
            const resData = await res.json();
            console.log("options_______", resData)
            setOptions(resData.options)
        }
        fetchOptions();
        // console.log("---eventID----", eventId)
        // const loc_ev = dispatch(seeLocationEvents(eventId.id));
        // console.log("!!!!!!", loc_ev)
      }, []);

    const optionComponents = options.map((option) =>{
        return (
            <div key={option.id} className="option_tile">
                <div className="option_name">{option.name}</div>
            </div>
        )
    })
    return(
        <div>
            <div>Options</div>
            <div className="outer_option_box">
                {optionComponents}
            </div>
        </div>
    )
}

export default Options;
