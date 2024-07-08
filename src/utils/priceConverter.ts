export const priceToNumber = (priceString: string): number => {
  return parseInt(priceString.replace(/,/g, ""), 10);
};

export const numberToPrice = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
