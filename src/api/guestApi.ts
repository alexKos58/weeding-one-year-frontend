import api from "./axios";
import type { GuestRequest } from "../types/guest";

export async function createGuest(request: GuestRequest) {
    const response = await api.post("/guests", request);
    return response.data;
}