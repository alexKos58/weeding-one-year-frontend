import { motion } from "framer-motion";

import { invitation } from "../../constants/invitation";

import Button from "../UI/Button/Button";

type HeroContentProps = {
    onAccept: () => void;
};

export default function HeroContent({ onAccept }: HeroContentProps) {

    return (

        <motion.div

            className="hero__content"

            initial={{opacity:0,x:80}}

            animate={{opacity:1,x:0}}

            transition={{duration:1}}

        >

            <span className="hero__subtitle">
                {invitation.hero.subtitle}
            </span>

            <h1>
                {invitation.hero.title}
            </h1>

            <p>
                {invitation.hero.description}
            </p>

            <div className="hero__date">
                {invitation.hero.date}
            </div>

            <Button onClick={onAccept}>
                {invitation.hero.button}
            </Button>

        </motion.div>

    );

}