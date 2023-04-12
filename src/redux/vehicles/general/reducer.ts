import { IVehicle } from "@/interfaces/vehicles.interface";
import { showAlert, showToast } from "@/utils/sweetalert.utils";
import moment from "moment";
import { types } from "./types";

const initialState = {
  vehicles: []
}

export const generalVehiclesReducer = (state = initialState, action: any) => {
  const findVehicle: IVehicle = state.vehicles.find((vehicle: IVehicle) => vehicle.id === action.payload);

  switch (action.type) {
    case types.checkin:
      if (findVehicle) {
        showAlert('Duplicado', '¡Este vehiculo ya ha ingresado!', 'warning');
        return {
          vehicles: state.vehicles
        }
      } else {
        const vehicle: IVehicle = {
          id: action.payload,
          date_init: moment().format('DD-MM-YYYY HH:mm'),
          type: 'General'
        };
        showToast(`Se ha registrado el vehiculo ${vehicle.id}`, 'success', 'center');
        return {
          vehicles: [...state.vehicles, vehicle]
        }
      }
    case types.checkout:
      if (findVehicle) {
        findVehicle.date_end = moment().format('DD-MM-YYYY HH:mm');
        showToast(`Se ha retirado el vehiculo ${findVehicle.id}`, 'success', 'center');
        return {
          vehicles: [...state.vehicles]
        }
      } else {
        showAlert('Inexistente', '¡Este vehiculo no ha ingresado!', 'warning');
        return {
          vehicles: state.vehicles
        }
      }
    default:
      return state;
  }
}