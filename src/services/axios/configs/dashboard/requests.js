import dashboardInstance from '.';
import handleRequests from '..';
import { ADD_FILE, DELETE_FILE, EDIT_FILE } from './endpoints';

const addFileHandler = async (data) => {
  const res = await handleRequests(dashboardInstance, {
    method: 'post',
    url: ADD_FILE,
    data,
  });
  return res;
};

const editFileHandler = async (data) => {
  const res = await handleRequests(dashboardInstance, {
    method: 'patch',
    url: EDIT_FILE,
    data,
  });
  return res;
};

const deleteFileHandler = async (id) => {
  const res = await handleRequests(dashboardInstance, {
    method: 'delete',
    url: `${DELETE_FILE}/${id}`,
  });
  return res;
};

export { addFileHandler, editFileHandler, deleteFileHandler };
