import axios from 'axios';
//   const API = `https://file-sharing-app-server-beta.vercel.app/upload`
export const uploadFile = async (data) => {
    try {
        const response = await axios.post("https://file-sharing-app-server-beta.vercel.app/upload", data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}