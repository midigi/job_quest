import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacter } from "../store/character";

const createCharForm = () => {
    const [characterName, setCharacterName] = useState("");
    const [characterUrl, setCharacterUrl] = useState("https://webstockreview.net/images/student-clipart-college-student-2.png");
    const dispatch = useDispatch();
}

const onCharCreation = async (e) => {
    e.preventDefault();
    dispatch(createCharacter({characterName, characterUrl}));
    await history.pushState("/");
};

return (
    <div className="char_create_box">
        Hi
        {/* <form className="char_create_form" onSubmit={onCharCreation}>
            <div>Create Character</div>
            <div>
                <input
                    name="char_title"
                    className="char_title"
                    type="text"
                    value={characterName}
                    onChange={}
                />

            </div>

        </form> */}
    </div>
)
