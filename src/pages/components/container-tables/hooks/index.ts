import { IVehicle } from "@/interfaces/vehicles.interface";
import { IStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useContainerTables() {

  const { general, oficial, resident } = useSelector((state: IStore) => state);

  const [generals, setGenerals] = useState<IVehicle[]>([]);
  const [oficials, setOficials] = useState<IVehicle[]>([]);
  const [residents, setResidents] = useState<IVehicle[]>([]);

  // Watch generals vehicles
  useEffect(() => {
    general.vehicles && setGenerals(general.vehicles);
  }, [general.vehicles]);

  // Watch oficials vehicles
  useEffect(() => {
    oficial.vehicles && setOficials(oficial.vehicles);
  }, [oficial.vehicles]);

  // Watch residents vehicles
  useEffect(() => {
    resident.vehicles.length && setResidents(resident.vehicles);
  }, [resident.vehicles]);

  return {
    generals,
    oficials,
    residents
  }
}

export default useContainerTables;