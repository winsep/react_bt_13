import axios from 'axios';

const accessKey = 'QFDfgdB3vWLYAcMuQXkqOfxEDvhmPynQJPoURZ6SS9U'; // ← Đổi thành key của bạn

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${accessKey}`
  }
});
