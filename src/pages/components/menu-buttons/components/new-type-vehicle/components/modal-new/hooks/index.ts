import { useLayoutEffect, useRef } from 'react';

interface IProps {
  data: any
}

function useModalNewType({
  data
}: IProps) {

  const idVehicle: any = useRef(null);
  const typeVehicle: any = useRef(null);

  useLayoutEffect(() => {
    if (data.id === '') idVehicle.current['value'] = '';
    if (data.type === '') typeVehicle.current['selectedIndex'] = 0;
  }, [data]);

  return {
    idVehicle,
    typeVehicle
  }
}

export default useModalNewType;