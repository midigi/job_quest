import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./styling/event.css"

function Events () {

    const eventId = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents(){
            const res = await fetch(`/api/location/${eventId.id}/events`)
            const resData = await res.json();
            setEvents(resData.events)
        }
        fetchEvents();
      }, [eventId]);

    const eventComponents = events.map((event) =>{
        return (
            <NavLink to={`/${event.id}/options`}key={event.id} className="event_tile">
                <h4 className="event_name">{event.name}</h4>
                <div className="event_description">{event.description}</div>
            </NavLink>
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
