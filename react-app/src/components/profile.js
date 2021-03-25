import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCharacters, setCharacter} from "../store/character";
import Inventory from "./Inventory";
import "./styling/profile.css";

function Profile(){
    const characters = useSelector((state) => Object.values(state.character.characters));
    const activeCharacter = useSelector((state) => state.character.character);
    // const [activeChar, setActiveChar] = useState("active");
    const dispatch = useDispatch()

    const setActiveCharacter = (id) => (e) => {
        dispatch(setCharacter(id))
    }

    useEffect(() => {
        async function fetchCharacters(){
            const res = await fetch(`/api/character/`)
            const resData = await res.json();
            dispatch(setCharacters(resData.characters))
        }
        fetchCharacters();
    }, []);

    return (
        <div className="most_outer_profile">
                <div className="outer_profile">
                {characters && characters.map((character) => (
                    <div key={character.id}>
                        <button onClick={setActiveCharacter(character.id)}>
                            <img src={character.pic_url} className={ character.id == activeCharacter ? "character_img_active" : "character_img"} />
                        </button>
                        <div className="profile_name">Name: {character.name}</div>
                    </div>
                ))}
                </div>
                {/* <Inventory /> */}

        </div>
    )
}


export default Profile;
