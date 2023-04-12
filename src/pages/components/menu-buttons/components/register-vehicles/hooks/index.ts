import { useDispatch } from "react-redux";
import { CheckinAction } from '@/redux/vehicles/general/actions';
import { CheckoutAction } from '@/redux/vehicles/general/actions';

function useRegisterVehicles() {

  const dispatch = useDispatch();

  const handleClickCheckIn = () => {
    dispatch(CheckinAction('XXX-00000'));
  }

  const handleClickCheckOut = () => {
    dispatch(CheckoutAction('XXX-00000'));
  }

  return {
    handleClickCheckIn,
    handleClickCheckOut
  }
}

export default useRegisterVehicles;