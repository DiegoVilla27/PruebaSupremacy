import { IVehicle } from "@/interfaces/vehicles.interface";

// VEHICLES
export const getVehiclesStorage: IVehicle[] | null = localStorage.getItem('vehicles') ? JSON.parse(localStorage.getItem('vehicles')!) : null;
export const setVehiclesStorage = (vehicles: IVehicle[]) => localStorage.setItem('vehicles', JSON.stringify(vehicles));
export const deleteVehiclesStorage = () => localStorage.removeItem('vehicles');