import "./Event.scss";

import { invitation } from "../../constants/invitation";

import EventCard from "./EventCard";

import {

    FaCalendarAlt,

    FaClock

} from "react-icons/fa";

import {

    FaLocationDot

} from "react-icons/fa6";

export default function Event(){

    return(

        <section className="event">

            <h2>
                {invitation.event.title}
            </h2>

            <p className="event__subtitle">
                {invitation.event.subtitle}
            </p>

            <div className="event__cards">

                <EventCard
                    icon={<FaCalendarAlt/>}

                    title="Дата"

                    value={invitation.event.date}

                    delay={0}
                />

                <EventCard
                    icon={<FaClock/>}

                    title="Время"

                    value={invitation.event.time}

                    delay={0.2}
                />

                <EventCard
                    icon={<FaLocationDot/>}

                    title="Место"

                    value={`${invitation.event.address}
${invitation.event.place}`}

                    delay={0.4}
                />

            </div>

        </section>

    );

}