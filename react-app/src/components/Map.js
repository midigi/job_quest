import "../images/house_icon.png";
import "./styling/map.css";
import React from "react";

function Maps() {
    const tiles = Array.from(Array(81).keys());

    function renderTile(t) {
        return(
            <div className="map_tile">
                <div className="location_img"></div>
                <div className='location_name'>Home</div>
            </div>
        )
    }

    return (
        <div className="outer_map">
            {/* {tiles.map(tile => renderTile(tile))} */}
            {/* <div className="map_tile">
                <div className="location_img" ></div>
            </div>
            <div className="map_tile">
                <div className="location_img" ></div>
            </div>
            <div className="map_tile">
                <div className="location_img" ></div>
            </div>
            <div className="map_tile">
                <div className="location_img" ></div>
            </div>
            <div className="map_tile">
                <div className="location_img" ></div>
            </div>
            <div className="map_tile">
                <div></div>
            </div>
            <div className="map_tile">
                <div></div>
            </div>
            <div className="map_tile">
                <div className="location_img" >hello</div>
            </div>
            <div className="map_tile">
                <div className="location_img" ></div>
            </div>
            <div className="map_tile">
                <div className="location_img" ></div>
            </div> */}
            {/* <div className="map_tile">
                <div className="blank_tile"></div>
            </div>
            <div className="map_tile">
                <div className="house_img"></div>
            </div>
            <div className="map_tile">
                <div className="library_img"></div>
            </div>
            <div className="map_tile">
                <div className="stadium_img"></div>
            </div> */}
            {/* style="background-image: url('../images/house_icon.png')" */}
            <div className="map_tile">
                <img className="house_img"/>
                <div className='location_name'>Home</div>
            </div>
            <div className="map_tile">
                <div className="blank_tile"></div>
            </div>
            <div className="map_tile">
                <div className="stadium_img">
                    <div className='location_name'>
                        Stadium
                    </div>
                </div>
            </div>
            <div className="map_tile">
                <div className="blank_tile2"></div>
            </div>
            <div className="map_tile">
                <div className="library_img"></div>
            </div>
            <div className="map_tile">
                <div className="blank_tile3"></div>
            </div>
            <div className="map_tile">
                <div className="blank_tile4"></div>
            </div>
            <div className="map_tile">
                <div className="blank_tile5"></div>
            </div>


        </div>
    )
}

export default Maps;
