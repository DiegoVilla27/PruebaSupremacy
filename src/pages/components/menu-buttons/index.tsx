import { BoxCol } from '@/components/grid';
import NewTypeVehicles from './components/new-type-vehicle';
import RegisterVehicles from "./components/register-vehicles";

function MenuButtons() {
  return (
    <BoxCol cols={4}>
      <RegisterVehicles />
      <hr />
      <NewTypeVehicles />
      <hr />
    </BoxCol>
  );
}

export default MenuButtons;
