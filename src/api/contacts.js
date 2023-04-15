import axios from 'axios';

axios.defaults.port = process.env.SERVER_PORT || 3006;
export default axios.create(
    {
        baseURL: `http://localhost:${axios.defaults.port}/`
    }
)
