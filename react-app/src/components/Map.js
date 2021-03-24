import "../images/house_icon.png";
import "./styling/map.css";
import React, { useEffect, useState } from "react";
import {  Drawer, Button  } from 'antd';
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import Inventory from "./Inventory";

function Maps() {
    // const [locations, setLocations] = useState([])

    return (
        <div>
            Welcome to Job Quest. Explore why don't you?
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
        </div>
    )
}

export default Maps;
