import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCharacters, setCharacter} from "../store/character";
import Inventory from "./Inventory";
import "./styling/profile.css";
import {deleteChar} from "../store/character";

function Profile(){
    const characters = useSelector((state) => Object.values(state.character.characters));
    const activeCharacter = useSelector((state) => state.character.character);
    const dispatch = useDispatch();

    const setActiveCharacter = (id) => (e) => {
        dispatch(setCharacter(id));
    }

    const deleteCharacter = (id) => (e) => {
        dispatch(deleteChar(id));
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
                        <button className="delete_button" onClick={deleteCharacter(character.id)}>
                            Delete
                        </button>
                    </div>
                ))}
                </div>
        </div>
    )
}


export default Profile;
