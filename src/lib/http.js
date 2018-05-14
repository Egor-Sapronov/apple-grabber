import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_API_URL,
});

export const getDataFromSuccessResponse = response => response.data;

export function handleApiError(response) {
  if (response.success) {
    return response;
  }

  throw new Error(response.error);
}

export function getMessageFromApiError(error) {
  if (error && error.message) {
    return error.message;
  }

  return 'Something went wrong, please reload page.';
}
