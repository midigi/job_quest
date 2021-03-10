import React, { useEffect, useState } from "react";
// import { useDispatch} from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import Options from "./Option"
import "./styling/event.css"

function Events () {
    // const dispatch = useDispatch();
    const eventId = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents(){
            const res = await fetch(`/api/location/${eventId.id}/events`)
            const resData = await res.json();
            console.log("events_______", resData)
            setEvents(resData.events)
        }
        fetchEvents();
        // console.log("---eventID----", eventId)
        // const loc_ev = dispatch(seeLocationEvents(eventId.id));
        // console.log("!!!!!!", loc_ev)
      }, [eventId]);

    const eventComponents = events.map((event) =>{
        return (
            <div key={event.id} className="event_tile">
                <div>Event: {event.name}</div>
                <div>Description: {event.description}</div>
                <NavLink to={`/${event.id}/options`}>Option</NavLink>
            </div>
        )
    })
    return(
        <div>
            <div>Event Page</div>
            <div className="outer_event_box">
                {eventComponents}
            </div>
        </div>
    )
}

export default Events;
