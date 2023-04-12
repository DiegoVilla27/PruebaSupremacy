export const badgeByType = (name: string): string => {
  const obj: any = {
    'General': 'bg-secondary',
    'Oficial': 'bg-success',
    'Residente': 'bg-primary'
  };
  return obj[name];
}