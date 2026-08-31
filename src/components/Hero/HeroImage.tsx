import { motion } from "framer-motion";

import hero from "../../assets/images/kissing.jpg";

export default function HeroImage() {

    return (

        <motion.div

            className="hero__image"

            initial={{opacity:0,x:-80}}

            animate={{opacity:1,x:0}}

            transition={{duration:1}}

        >

            <div className="hero__image-inner">

                <img

                    src={hero}

                    alt="Первая годовщина свадьбы"

                />

            </div>

        </motion.div>

    );

}