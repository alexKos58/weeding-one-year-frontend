import { useState } from "react";

import Hero from "../../components/Hero/Hero";
import Event from "../../components/Event/Event";
import Countdown from "../../components/Countdown/Countdown";
import Gallery from "../../components/Gallery/Gallery";
import Decor from "../../components/Decor/Decor";
import RSVP from "../../components/RSVP/RSVP";

export default function Home() {

    const [rsvpOpen, setRsvpOpen] = useState(false);

    return (
        <>
            <Decor/>
            <Hero onAccept={() => setRsvpOpen(true)}/>
            <Event/>
            <Countdown/>
            <Gallery/>
            <RSVP
                open={rsvpOpen}
                onClose={() => setRsvpOpen(false)}
            />
        </>
    );

}