import { types } from "./types";

export const CheckinAction = (id: string) => {
    return {
        type: types.checkin,
        payload: id
    }
}

export const CheckoutAction = (id: string) => {
    return {
        type: types.checkout,
        payload: id
    }
}