import axios from 'axios';

const axiosTest = (data) => {
  return axios.get('/axiostest', { params: data });
};


export default axiosTest;
