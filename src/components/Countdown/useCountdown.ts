import { useEffect, useState } from "react";

export default function useCountdown(targetDate: string) {

    const calculate = () => {

        const difference = new Date(targetDate).getTime() - Date.now();

        if (difference <= 0) {

            return {

                days: 0,

                hours: 0,

                minutes: 0,

                seconds: 0

            };

        }

        return {

            days: Math.floor(difference / (1000 * 60 * 60 * 24)),

            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

            minutes: Math.floor((difference / (1000 * 60)) % 60),

            seconds: Math.floor((difference / 1000) % 60)

        };

    };

    const [time, setTime] = useState(calculate());

    useEffect(() => {

        const interval = setInterval(() => {

            setTime(calculate());

        },1000);

        return () => clearInterval(interval);

    },[]);

    return time;

}