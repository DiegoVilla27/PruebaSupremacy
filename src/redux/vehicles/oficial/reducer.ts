import { IVehicle } from "@/interfaces/vehicles.interface";
import { showAlert, showToast } from "@/utils/sweetalert.utils";
import { types } from "./types";

const initialState = {
  vehicles: []
}

export const oficialVehiclesReducer = (state = initialState, action: any) => {
  const findVehicle: IVehicle = state.vehicles.find((vehicle: IVehicle) => vehicle.id === action.payload);

  switch (action.type) {
    case types.add:
      if (findVehicle) {
        showAlert('Duplicado', '¡Este vehiculo oficial ya está agregado en la lista!', 'warning');
        return {
          vehicles: state.vehicles
        }
      } else {
        const vehicle: IVehicle = {
          id: action.payload,
          type: 'Oficial'
        };
        showToast(`Se ha registrado el vehiculo oficial: ${vehicle.id}`, 'success', 'center');
        return {
          vehicles: [...state.vehicles, vehicle]
        }
      }
    case types.remove:
      if (findVehicle) {
        const vehicles: IVehicle[] = state.vehicles.filter((vehicle: IVehicle) => vehicle.id !== findVehicle.id)
        showToast(`Se ha retirado el vehiculo oficial: ${findVehicle.id}`, 'success', 'center');
        return {
          vehicles
        }
      } else {
        showAlert('Inexistente', '¡Este vehiculo oficial no ha sido registrado!', 'warning');
        return {
          vehicles: state.vehicles
        }
      }
    default:
      return state;
  }
}