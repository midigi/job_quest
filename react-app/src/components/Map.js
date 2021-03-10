import "../images/house_icon.png";
import "./styling/map.css";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";

function Maps() {
    // const dispatch = useDispatch();
    const [locations, setLocations] = useState([])

    // useEffect(()=>{
    //     dispatch(seeLocation())
    // },[]);

    // useEffect(() => {
    //     async function fetchData() {
    //       const response = await fetch("/api/location/");
    //       const responseData = await response.json();
    //       setLocations(responseData.locations);
    //     }
    //     fetchData();
    //   }, []);

    //   const locationComponents = locations.map((location) => {
    //       return (
    //         <div key={location.id}>
    //           <NavLink to={`/${location.id}/events`}>{location.name}</NavLink>
    //         </div>
    //       )
    //   })
    return (
        <div className="outer_map">
            {/* <div>{locationComponents}</div> */}
            {/* style="background-image: url('../images/house_icon.png')" */}
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
    )
}

export default Maps;
