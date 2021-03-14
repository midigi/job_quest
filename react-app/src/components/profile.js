import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCharacters, setCharacter} from "../store/character";
import "./styling/profile.css";

function Profile(){
    // const characterId = useParams();
    // const [characters, setCharacters] = useState([]);
    // const [activeCharacter, setActiveCharacter] = useState(1);
    debugger;
    const characters = useSelector((state) => Object.values(state.character.characters));
    // ToDo need to pre-select active character during character CRUD set up
    // const activeChar = useSelector((state) => Object.values(state.character.character));
    const dispatch = useDispatch()


    const setActiveCharacter = (id) => (e) => {
        dispatch(setCharacter(id))
    }

    useEffect(() => {
        async function fetchCharacters(){
            const res = await fetch(`/api/character/`)
            const resData = await res.json();
            // console.log('characters-----', resData)
            dispatch(setCharacters(resData.characters))
        }
        fetchCharacters();
    }, []);

    return (
        <div>

            {/* <div>
            ToDo will only work when CRUD character set up in order.
            activeChar && (
                <div>Active Character</div>
                <img src={activeChar.pic_url} />
                <div>Name: {activeChar.name}</div>
                <div>Intelligence: {activeChar.intelligence}</div>
                <div>Mental Health: {activeChar.mental_health}</div>
                <div>Stamina: {activeChar.stamina}</div>
                <div>Wisdom: {activeChar.wisdom}</div>
            )
            </div> */}

            <div>
                <div>Additional Characters</div>
                {characters && characters.map((character) => (
                    <div key={character.id}>
                        <button onClick={setActiveCharacter(character.id)}>
                            <img className="character_img" src={character.pic_url} />
                        </button>
                        <div>Name: {character.name}</div>
                        <div>Intelligence: {character.intelligence}</div>
                        <div>Mental Health: {character.mental_health}</div>
                        <div>Stamina: {character.stamina}</div>
                        <div>Wisdom: {character.wisdom}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Profile;
