import "./Countdown.scss";

import CountdownItem from "./CountdownItem";

import useCountdown from "./useCountdown";

import { invitation } from "../../constants/invitation";

export default function Countdown(){

    const {

        days,

        hours,

        minutes,

        seconds

    } = useCountdown(

        invitation.countdown.targetDate

    );

    return(

        <section className="countdown">

            <h2>

                {invitation.countdown.title}

            </h2>

            <div className="countdown__grid">

                <CountdownItem

                    value={days}

                    label="дней"

                />

                <CountdownItem

                    value={hours}

                    label="часов"

                />

                <CountdownItem

                    value={minutes}

                    label="минут"

                />

                <CountdownItem

                    value={seconds}

                    label="секунд"

                />

            </div>

            <p>

                {invitation.countdown.subtitle}

            </p>

        </section>

    );

}