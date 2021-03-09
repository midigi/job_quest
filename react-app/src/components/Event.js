import { formatCountdown } from "antd/lib/statistic/utils";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {seeLocationEvents} from "../store/location";

function Events () {
    const dispatch = useDispatch();
    const eventId = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents(){
            const res = await fetch(`/api/location/${eventId.id}/events`)
            const resData = await res.json();
            setEvents(resData.events)
        }
        fetchEvents();
        // console.log("---eventID----", eventId)
        // const loc_ev = dispatch(seeLocationEvents(eventId.id));
        // console.log("!!!!!!", loc_ev)
      }, [eventId]);

    const eventComponents = events.map((event) =>{
        return (
            <div key={event.id}>
                {event.name}
            </div>
        )
    })
    return(
        <div>
            <div>Event Page</div>
            <div>{eventComponents}</div>
        </div>
    )
}

export default Events;
