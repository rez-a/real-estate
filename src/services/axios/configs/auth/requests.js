import authInstance from '.';
import handleRequests from '..';
import { SIGNUP } from './endpoints';

const signupRequest = async (data) => {
  const res = await handleRequests(authInstance, {
    url: SIGNUP,
    data,
  });
  return res;
};

export { signupRequest };
