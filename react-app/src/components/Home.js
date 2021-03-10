import React from "react";
import Maps from "../components/Map";
import Profile from "../components/profile";

function Home(){
    return (
        <div>
            <div>
                <Profile />
            </div>
            <div>
                This will be the inventory component
            </div>
            <div>
                <Maps />
            </div>
        </div>
    )
}

export default Home;
