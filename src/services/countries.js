import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/all';

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

const exportObj = {
  getAll,
};

export default exportObj;
