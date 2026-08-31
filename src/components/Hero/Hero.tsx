import "./Hero.scss";

import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";

type HeroProps = {
    onAccept: () => void;
};

export default function Hero({ onAccept }: HeroProps) {

    return (

        <section className="hero">

            <HeroImage/>

            <HeroContent onAccept={onAccept}/>

        </section>

    );

}