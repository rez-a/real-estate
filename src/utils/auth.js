import { hash, compare } from 'bcryptjs';

const hashPassword = async (password) => {
  const hashedPass = await hash(password, 12);
  return hashedPass;
};

const validatePassword = async (password, passwordHashed) => {
  const isValid = await compare(password, passwordHashed);
  return isValid;
};

export { hashPassword, validatePassword };
