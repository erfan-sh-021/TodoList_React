import axios from "axios";

const instance = axios.create({
    baseURL : 'https://end-test-9ddf2-default-rtdb.firebaseio.com',
    timeout : 5000
})
export default instance