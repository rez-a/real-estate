import dashboardInstance from '.';
import handleRequests from '..';
import { ADD_FILE } from './endpoints';

const addFileHandler = async (data) => {
  const res = await handleRequests(dashboardInstance, {
    method: 'post',
    url: ADD_FILE,
    data,
  });
  return res;
};

export { addFileHandler };
