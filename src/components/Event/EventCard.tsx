import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {

    icon: ReactNode;

    title: string;

    value: string;

    delay: number;

};

export default function EventCard({

    icon,

    title,

    value,

    delay

}: Props){

    return(

        <motion.div

            className="event__card"

            initial={{opacity:0,y:60}}

            whileInView={{opacity:1,y:0}}

            viewport={{once:true}}

            transition={{

                duration:.6,

                delay

            }}

        >

            <div className="event__icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p>{value}</p>

        </motion.div>

    );

}