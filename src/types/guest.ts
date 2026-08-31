export const AttendanceStatus = {
    WILL_COME: "WILL_COME",
    WILL_NOT_COME: "WILL_NOT_COME",
} as const;

export type AttendanceStatus = typeof AttendanceStatus[keyof typeof AttendanceStatus];

export const DrinkType = {
    BEER: "BEER",
    WINE: "WINE",
    STRONG: "STRONG",
    SOFT_DRINK: "SOFT_DRINK",
} as const;

export type DrinkType = typeof DrinkType[keyof typeof DrinkType];

export interface GuestRequest {
    firstName: string;
    lastName: string;
    attendanceStatus: AttendanceStatus;
    drinks: DrinkType[];
}