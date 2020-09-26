import Axios from 'axios';

const KEY = 'AIzaSyDn-ESYIDReJjX6qflwv6tzDVIVW9Ry3T0';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});
