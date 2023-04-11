import { AxiosResponse } from "axios";

export const useHttpClient = () => {
  const callEndpoint = async (axiosCall: Promise<AxiosResponse<any, any>>) => {
    let res: any = {};
    try {
      res = await axiosCall;
    } catch (err) {
      console.log('ERROR', err);
    }
    return res['data'];
  };

  return {
    callEndpoint,
  };
};