import axios from "axios";

export const getDataCharacters = (url, newArray, setState) => {
  axios.get(url).then(({ data }) => {
    data.results.forEach((c) => newArray.push(c));
    setState((character) => [...character, ...newArray]);
  });
};
