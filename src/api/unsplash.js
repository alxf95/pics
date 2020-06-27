import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FUaBYGF_qTXbG5KeT23sGnbPIrhVHsTGYRCbIpZDV5M',
  },
});
