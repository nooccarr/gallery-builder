// DO NOT MODIFY
import data from "./data";

export const getData = () => {
  return new Promise((resolve, reject) => {
    if (Date.now() % 5 === 0) {
      reject(new Error("Error unable to fetch data"));
    }

    resolve(String.fromCharCode(...data));
  });
};
