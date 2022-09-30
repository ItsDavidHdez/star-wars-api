import axios from "axios";

const BASE_API_FOR_PERSON = "https://swapi.dev/api/people";

export const getDataCharacter = async (id) => {
  const response = await axios.get(`${BASE_API_FOR_PERSON}/${id}`);
  return response;
};
