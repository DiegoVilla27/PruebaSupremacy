import { types } from "./types";

export const AddOficial = (name: string) => {
    return {
        type: types.add,
        payload: name
    }
}

export const RemoveOficial = (name: string) => {
    return {
        type: types.remove,
        payload: name
    }
}