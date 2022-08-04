import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1';

async function getAll() {
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
}

const exportObj = {
  getAll,
};

export default exportObj;
