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

    useEffect(() => {
        async function fetchData() {
          const response = await fetch("/api/location/");
          const responseData = await response.json();
          setLocations(responseData.locations);
        }
        fetchData();
      }, []);

      const locationComponents = locations.map((location) => {
          return (
            <div key={location.id}>
              <NavLink to={`/${location.id}/events`}>{location.name}</NavLink>
            </div>
          )
      })
    return (
        <div className="outer_map">
            <div>{locationComponents}</div>
            {/* style="background-image: url('../images/house_icon.png')" */}
            <a className="map_tile house_img" to={`/1/events`}>
                <div>
                {/* `/articles/${a.id}` */}
                    <div className='location_name'>
                        Dormitory
                    </div>
                </div>
            </a>
            <div className="map_tile stadium_img">
                <div className="stadium_img">
                    <div className='location_name'>
                        Stadium
                    </div>
                </div>
            </div>
            <div className="map_tile library_img">
                <div className="library_img">
                    <div className='location_name'>
                        Library
                    </div>
                </div>
            </div>
            <div className="map_tile">
                <div className="blank_tile3"></div>
            </div>
            <div className="map_tile admission_img">
                <div className="admission_img">
                    <div className='location_name'>
                        Admission's Office
                    </div>
                </div>
            </div>
            <div className="map_tile lecture_hall_img">
                <div className="lecture_hall_img">
                    <div className='location_name'>
                        Lecture Hall
                    </div>
                </div>
            </div>
            <div className="map_tile career_office_img">
                <div className="career_office_img">
                    <div className='location_name'>
                        Career Office
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Maps;
