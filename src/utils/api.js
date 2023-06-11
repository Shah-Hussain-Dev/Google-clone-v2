import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyAwPZscAfRpvY0mfsoMPO5FPTIu2IKMMVI",
  cx: "659d4efcbd6494dd6",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
