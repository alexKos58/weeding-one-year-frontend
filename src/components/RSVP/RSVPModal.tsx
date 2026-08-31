import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import RSVPForm from "./RSVPForm";

type RSVPModalProps = {
    open: boolean;
    onClose: () => void;
};

export default function RSVPModal({ open, onClose }: RSVPModalProps) {

    const [success, setSuccess] = useState(false);

    useEffect(() => {

        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKey);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };

    }, [open, onClose]);

    function handleClose() {
        setSuccess(false);
        onClose();
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="rsvp-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .3 }}
                    onClick={handleClose}
                >
                    <motion.div
                        className="rsvp-modal__card"
                        initial={{ opacity: 0, y: 40, scale: .95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: .95 }}
                        transition={{ duration: .4, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="rsvp-modal__close"
                            onClick={handleClose}
                            aria-label="Закрыть"
                        >
                            ×
                        </button>

                        {success ? (
                            <div className="rsvp-success">

                                <div className="rsvp-success__icon">
                                    ❤️
                                </div>

                                <h4>
                                    Спасибо!
                                </h4>

                                <p>
                                    Мы получили ваш ответ.
                                    <br/>
                                    Будем рады видеть вас
                                    19 сентября!
                                </p>

                            </div>
                        ) : (
                            <>
                                <h3 className="rsvp-modal__title">
                                    Подтвердите присутствие
                                </h3>

                                <p className="rsvp-modal__text">
                                    Пожалуйста, заполните небольшую форму.
                                    Это поможет нам подготовить праздник.
                                </p>

                                <RSVPForm onSuccess={() => setSuccess(true)} />
                            </>
                        )}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}