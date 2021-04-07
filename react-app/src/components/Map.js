import "../images/house_icon.png";
import "./styling/map.css";
import React from "react";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";


function Maps() {
    const activeCharacter = useSelector((state) => state.character.character);

    return (
        activeCharacter && activeCharacter ? (
        (<div className="outer_outer">
            <div dangerouslySetInnerHTML={{__html: `<!-- Go to .../${activeCharacter}/hire-me to find the easter egg. -->`}} />
        <div className="outer_map">
            <NavLink className="map_tile house_img" to={`/4/events`}>
                <div className='location_name'>
                    Dormitory
                </div>
            </NavLink>
            <NavLink className="map_tile stadium_img" to={`/5/events`}>
                <div className='location_name'>
                    Stadium
                </div>
            </NavLink>
            <NavLink className="map_tile library_img" to={`/3/events`}>
                <div className='location_name'>
                    Library
                </div>
            </NavLink>
            <NavLink className="map_tile admission_img" to={`/1/events`}>
                <div className='location_name'>
                    Admission's Office
                </div>
            </NavLink>
            <NavLink className="map_tile lecture_hall_img" to={`/2/events`}>
                <div className='location_name'>
                    Lecture Hall
                </div>
            </NavLink>
            <NavLink className="map_tile career_office_img" to={`/6/events`}>
                <div className='location_name'>
                    Career Office
                </div>
            </NavLink>
        </div>
        </div>)) :
        <div className="alt_outer">
            Welcome to Job Quest!
            <div className="set_char_warning">Set active character to proceed. Click on the profile icon in the nav bar and select a character.</div>
            <div>
                <img className="profile_button" src="http://cdn.onlinewebfonts.com/svg/img_206976.png" alt="profile_button" />
            </div>
            <div className="set_char_warning2">Or create a new character.</div>
            <div>
                <NavLink to="/character" exact={true} activeClassName="active">
                    <img className="create_char_button" src="http://cdn.onlinewebfonts.com/svg/img_504593.png" alt="create_char_button"/>
                </NavLink>
            </div>
        </div>
    )
}

export default Maps;
