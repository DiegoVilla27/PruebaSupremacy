import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { IVehicle } from "@/interfaces/vehicles.interface";

export interface IStore {
  general: IVehicle[],
  oficial: IVehicle[]
}

// Reducers
import { generalVehiclesReducer } from "./vehicles/general/reducer";
import { oficialVehiclesReducer } from "./vehicles/oficial/reducer";
import { residentVehiclesReducer } from "./vehicles/resident/reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  general: generalVehiclesReducer,
  oficial: oficialVehiclesReducer,
  resident: residentVehiclesReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);