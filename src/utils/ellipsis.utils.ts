export const ellipsisTransform = (value: string, quantity: number) => {
  return (value.length > quantity) ? value.substr(0, quantity - 1) + '...' : value;
}