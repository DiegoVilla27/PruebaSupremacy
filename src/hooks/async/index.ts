export const useAsync = () => {
  const asyncFetch = (
    asyncFn: Promise<any>,
    successFn: Function
  ) =>
    asyncFn.then((res: any) => successFn(res));

  return {
    asyncFetch,
  };
};
