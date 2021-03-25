import "../images/house_icon.png";
import "./styling/map.css";
import React from "react";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";


function Maps() {
    // const [locations, setLocations] = useState([])
    const activeCharacter = useSelector((state) => state.character.character);

    return (
        activeCharacter && activeCharacter ? (
        (<div className="outer_outer">
            {/* Welcome to Job Quest. Explore why don't you? */}
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
            <div className="set_char_warning">SET ACTIVE CHARACTER TO PROCEED</div>
        </div>
    )
}

export default Maps;
