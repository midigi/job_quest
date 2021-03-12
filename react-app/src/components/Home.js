import React from "react";
import Maps from "../components/Map";
import Profile from "../components/profile";
import Inventory from "../components/Inventory";

function Home(){
    return (
        <div>
            <div>
                <Profile />
            </div>
            <div>
                <Inventory />
            </div>
            <div>
                <Maps />
            </div>
        </div>
    )
}

export default Home;
