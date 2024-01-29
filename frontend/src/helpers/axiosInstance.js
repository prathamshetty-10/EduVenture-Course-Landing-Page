import axios from "axios";
const BASE_URL="http://lms-server-6cnq.onrender.com/api/v1"
//"http://localhost:5014/api/v1";//url of server
const axiosInstance=axios.create();
axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials=true;
export default axiosInstance;
