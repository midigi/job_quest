import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function EasterEgg() {
    const history = useHistory()

    useEffect(() => {
        async function grantEasterEgg(){
            // ToDo write route, thunk, reducer for adding easter egg directly to user inventory.
            // const res = await fetch(`/api/option/${eventId.id}`)
            // const resData = await res.json();
            // setOptions(resData.options)
            history.push("/");
        }
        grantEasterEgg();
      }, []);

    return(
        <div>Ooooohhh what a discovery!</div>
    )
}

export default EasterEgg;
