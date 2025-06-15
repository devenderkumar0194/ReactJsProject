import axios from 'axios';
const backEndURL = "http://localhost:3000";

const getProductsAPI = async () => {

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NGU2OGRhZDljMjQwOTAzMjFlM2JmMyIsImVtYWlsIjoiZGV2QGdtYWlsLmNvbSIsImlhdCI6MTc0OTk2OTk4NCwiZXhwIjoxNzUwMDU2Mzg0fQ.BbEMAsmtZ1FU-q0QyLfcFgHzTeyDBOWF-QVPyAVPlKo"; // or get from Redux, context, etc.
    const response = await axios.get(backEndURL+'/products', {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
}

    // const response = await axios.post(
    //   'https://your-api.com/api/products',
    //   data,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`, // Include the token in the header
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // );


const productService = {
    getProductsAPI
}

export default productService;