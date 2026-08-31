import "./RSVP.scss";

import RSVPModal from "./RSVPModal";

type RSVPProps = {
    open: boolean;
    onClose: () => void;
};

export default function RSVP({ open, onClose }: RSVPProps) {
    return (
        <RSVPModal
            open={open}
            onClose={onClose}
        />
    );
}