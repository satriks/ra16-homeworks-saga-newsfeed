export const formatView = (view: string) => {
  const viewCoun = Math.round(Number(view) / 100);

  return viewCoun / 10;
};
