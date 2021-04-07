import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {optionDecider} from "../store/character";

function EasterEgg() {
    const history = useHistory()
    const dispatch = useDispatch();
    const {charId} = useParams();

    useEffect(() => {
        async function grantEasterEgg(){
            dispatch(optionDecider(charId, 13))
            history.push("/");
        }
        grantEasterEgg();
      }, [dispatch, charId, history]);

    return(
        <div>Ooooohhh what a discovery!</div>
    )
}

export default EasterEgg;
