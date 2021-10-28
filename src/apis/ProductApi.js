import data from "../data.json";

export const getAll = () => {
  return Promise.resolve(data);
};

export const getImageUrl = (imageArray) => {
  const hostUrl = "http://localhost:3000";
  let formatRelativePath = "";

  const mobile = window.matchMedia("(min-width: 0px)");
  const desktop = window.matchMedia("(min-width: 768px)");

  if (desktop.matches) {
    formatRelativePath = imageArray.desktop.slice(1);

    return hostUrl + formatRelativePath + "?raw=true";
  }

  if (mobile.matches) {
    formatRelativePath = imageArray.mobile.slice(1);

    return hostUrl + formatRelativePath + "?raw=true";
  }
};

export const countPrice = (cartItems) => {
  let sum = 0;
  if (cartItems) {
    cartItems.map((elem) => {
      return (sum += elem.price * elem.quantity);
    });

    return sum;
  }
  return "";
};
