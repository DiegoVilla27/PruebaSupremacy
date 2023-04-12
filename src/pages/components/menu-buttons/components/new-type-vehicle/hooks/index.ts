import { AddOficial, RemoveOficial } from '@/redux/vehicles/oficial/actions';
import { AddResident } from "@/redux/vehicles/resident/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface IData {
  id?: string;
  type?: string;
}

function useRegisterVehicles() {

  const dispatch = useDispatch();

  const [data, setData] = useState<IData>({ id: '', type: '' });

  const handleClickAdd = () => {
    if (data.type === '' || data.type === null) return;
    console.log(data)
    if (data.type === 'oficial')
      dispatch(AddOficial(data.id));
    else
      dispatch(AddResident(data.id));
    setData({ id: '', type: '' });
  }

  const handleClickRemove = () => {
    dispatch(RemoveOficial('XXX-00000'));
  }

  return {
    handleClickAdd,
    handleClickRemove,
    data, setData
  }
}

export default useRegisterVehicles;