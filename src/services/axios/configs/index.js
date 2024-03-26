import toast from 'react-hot-toast';

const handleRequests = async (instance, configs = {}) => {
  console.log(instance, configs);
  try {
    const res = await instance.request(configs);
    return res;
  } catch (err) {
    toast.error(err.response.data.error);
  }
};

export default handleRequests;
