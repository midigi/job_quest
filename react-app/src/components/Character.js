import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCharacter } from "../store/character";
import { message } from "antd";

const Character = () => {
    const [characterName, setCharacterName] = useState("");
    const [characterUrl, setCharacterUrl] = useState("https://webstockreview.net/images/student-clipart-college-student-2.png");
    const [locationId, setLocationId] = useState(1);
    const [stamina, setStamina] = useState(1);
    const [mentalHealth, setMentalHealth] = useState(1);
    const [wisdom, setWisdom] = useState(1);
    const [intelligence, setIntelligence] = useState(1);
    const [gender, setGender] = useState("Male");
    const sessionUser = useSelector((state) => state.session.user)
    const user_id = useSelector((state) => state.session.user.id)

    const dispatch = useDispatch();

    const IMAGES_Options = ["Male", "Female"]
    const image_url ={
    "Female": "https://webstockreview.net/images/clipart-student-female-15.png",
     "Male": "https://webstockreview.net/images/student-clipart-college-student-2.png"
    }


    const error = () => {
        message.error("Please enter a character name!");
      };



    const onCharCreation = async (e) => {
        e.preventDefault();
        if(!characterName){
            error();
            return;
        }
        dispatch(
            createCharacter({
                user_id,
                characterName,
                characterUrl,
                locationId,
                stamina,
                mentalHealth,
                wisdom,
                intelligence,
            })
        );
    };
    const handleChange = (e) => {
        setGender(e.target.value)
        setCharacterUrl(image_url[e.target.value])
    }

return (
    sessionUser && (
        <div className="char_create_box">
        Hi
        <form className="char_create_form" onSubmit={onCharCreation}>
            <div>Create Character</div>
            <div>
                <input
                    name="char_name"
                    className="char_name"
                    type="text"
                    value={characterName}
                    placeholder="Enter a character name"
                    onChange={(e)=> setCharacterName(e.target.value)}
                />

                <select
                  className="gender"
                  value={gender}
                  placeholder={gender}
                  onChange={handleChange}
                >
                  {IMAGES_Options.map((genders) => (
                    <option key={genders} value={genders}>
                      {genders}
                    </option>
                  ))}
                   {/* <img className={ inventory && (inventory.map(el => el.id ).includes(item.id) ? "item_img" : "item_img_grey")} src={item.pic_url} /> */}
                </select>
                <img style={{maxHeight: '300px'}} src={characterUrl} />

                <button className="char_submit_button" type="submit">
                  Create Character
                </button>
            </div>
        </form>
        </div>
    )
    )
}

export default Character;
