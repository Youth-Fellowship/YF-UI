import axios from 'axios'


export default class ApiService {
//   version: string;
//   config = null;
//   apiBaseURL = null;


  async create(endpointUrl, body) {
    return await axios.post(`${endpointUrl}`, body);
  }

  async read(endpointUrl) {
    return await axios.get(`${endpointUrl}`);
  }

  async update(endpointUrl, body) {
    return await axios.put(`${endpointUrl}`, body);
  }

  async delete(endpointUrl) {
    return await axios.delete(`${endpointUrl}`);
  }
}
