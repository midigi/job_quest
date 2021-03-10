import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styling/profile.css";

function Profile(){
    const characterId = useParams();
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        async function fetchCharacters(){
            const res = await fetch(`/api/character/`)
            const resData = await res.json();
            console.log('characters-----', resData)
            setCharacters(resData.characters)
        }
        fetchCharacters();
    }, [characterId]);

    const characterComs = characters.map((character) =>{
        return (
            <div key={character.id}>
                <img className="character_img" src={character.pic_url} />
                <div>Name: {character.name}</div>
                <div>Intelligence: {character.intelligence}</div>
                <div>Mental Health: {character.mental_health}</div>
                <div>Stamina: {character.stamina}</div>
                <div>Wisdom: {character.wisdom}</div>
            </div>
        )
    })

    return (
        <div>
            <div>
                {characterComs}
            </div>
        </div>
    )
}


export default Profile;
