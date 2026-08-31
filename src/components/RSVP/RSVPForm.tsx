import { useState } from "react";
import type { GuestRequest } from "../../types/guest";
import {
    AttendanceStatus,
    DrinkType,
} from "../../types/guest";
import { createGuest } from "../../api/guestApi";

type RSVPFormProps = {
    onSuccess: () => void;
};

export default function RSVPForm({ onSuccess }: RSVPFormProps) {

    const [form, setForm] = useState<GuestRequest>({
        firstName: "",
        lastName: "",
        attendanceStatus: AttendanceStatus.WILL_COME,
        drinks: [],
    });

    const [errors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        drinks?: string;
    }>({});

    async function handleSubmit(e: React.FormEvent) {

        e.preventDefault();

        const nextErrors: typeof errors = {};

        if (!form.firstName.trim()) {
            nextErrors.firstName = "Пожалуйста, укажите имя";
        }

        if (!form.lastName.trim()) {
            nextErrors.lastName = "Пожалуйста, укажите фамилию";
        }

        if (
            form.attendanceStatus === AttendanceStatus.WILL_COME &&
            form.drinks.length === 0
        ) {
            nextErrors.drinks = "Пожалуйста, выберите хотя бы один напиток";
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
            return;
        }

        await createGuest(form);

        onSuccess();
 
    }

    function toggleDrink(drink: DrinkType) {

        if (form.drinks.includes(drink)) {

            setForm({
                ...form,
                drinks: form.drinks.filter(d => d !== drink),
            });

        } else {

            setForm({
                ...form,
                drinks: [...form.drinks, drink],
            });

        }

        if (errors.drinks) {
            setErrors({ ...errors, drinks: undefined });
        }

    }

    return (

        <form className="rsvp-form" onSubmit={handleSubmit}>

            <div className={`rsvp-form__field ${errors.firstName ? "rsvp-form__field--error" : ""}`}>

                <label className="rsvp-form__label">
                    Имя
                </label>

                <input
                    className="rsvp-form__input"
                    placeholder="Ваше имя"
                    value={form.firstName}
                    onChange={(e)=>{
                        setForm({
                            ...form,
                            firstName:e.target.value
                        });
                        if (errors.firstName) {
                            setErrors({ ...errors, firstName: undefined });
                        }
                    }}
                />

                {errors.firstName && (
                    <span className="rsvp-form__error">
                        {errors.firstName}
                    </span>
                )}

            </div>

            <div className={`rsvp-form__field ${errors.lastName ? "rsvp-form__field--error" : ""}`}>

                <label className="rsvp-form__label">
                    Фамилия
                </label>

                <input
                    className="rsvp-form__input"
                    placeholder="Ваша фамилия"
                    value={form.lastName}
                    onChange={(e)=>{
                        setForm({
                            ...form,
                            lastName:e.target.value
                        });
                        if (errors.lastName) {
                            setErrors({ ...errors, lastName: undefined });
                        }
                    }}
                />

                {errors.lastName && (
                    <span className="rsvp-form__error">
                        {errors.lastName}
                    </span>
                )}

            </div>

            <div className="rsvp-form__field">

                <label className="rsvp-form__label">
                    Сможете ли вы прийти?
                </label>

                <select
                    className="rsvp-form__select"
                    value={form.attendanceStatus}
                    onChange={(e)=>
                        setForm({
                            ...form,
                            attendanceStatus:
                                e.target.value as AttendanceStatus
                        })
                    }
                >

                    <option value={AttendanceStatus.WILL_COME}>
                        Приду
                    </option>

                    <option value={AttendanceStatus.WILL_NOT_COME}>
                        Не смогу
                    </option>

                </select>

            </div>

            {
                form.attendanceStatus === AttendanceStatus.WILL_COME && (

                    <div className={`rsvp-form__field ${errors.drinks ? "rsvp-form__field--error" : ""}`}>

                        <label className="rsvp-form__label">
                            Предпочтения по напиткам
                        </label>

                        <div className="rsvp-form__drinks">

                            <label className="rsvp-form__drink">

                                <input
                                    type="checkbox"
                                    onChange={()=>toggleDrink(DrinkType.BEER)}
                                />

                                <span>🍺 Пиво</span>

                            </label>

                            <label className="rsvp-form__drink">

                                <input
                                    type="checkbox"
                                    onChange={()=>toggleDrink(DrinkType.WINE)}
                                />

                                <span>🍷 Вино</span>

                            </label>

                            <label className="rsvp-form__drink">

                                <input
                                    type="checkbox"
                                    onChange={()=>toggleDrink(DrinkType.STRONG)}
                                />

                                <span>🥃 Крепкие</span>

                            </label>

                            <label className="rsvp-form__drink">

                                <input
                                    type="checkbox"
                                    onChange={()=>toggleDrink(DrinkType.SOFT_DRINK)}
                                />

                                <span>🧃 Без алкоголя</span>

                            </label>

                        </div>

                        {errors.drinks && (
                            <span className="rsvp-form__error">
                                {errors.drinks}
                            </span>
                        )}

                    </div>

                )
            }

            <button
                className="rsvp-form__submit"
                type="submit"
            >
                Отправить
            </button>

        </form>

    );

}