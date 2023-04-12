import { types } from "./types";

export const AddResident = (name: string) => {
    return {
        type: types.add,
        payload: name
    }
}

export const RemoveResident = (name: string) => {
    return {
        type: types.remove,
        payload: name
    }
}