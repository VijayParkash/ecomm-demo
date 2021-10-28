export const formatPrice = (price) => {
  return parseInt(price)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .split(".")[0];
};
