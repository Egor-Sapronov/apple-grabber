import http, { getDataFromSuccessResponse, handleApiError } from './http';

export default function loadUsers() {
  return http.get('/users')
    .then(getDataFromSuccessResponse);
}

export function grabApple(userId) {
  return http.get(`/users/${userId}/grab`)
    .then(getDataFromSuccessResponse)
    .then(handleApiError);
}

export function clearApples() {
  return http.get('/apples/free')
    .then(getDataFromSuccessResponse)
    .then(handleApiError);
}

export function mapUsers(users) {
  return users.map(user => ({
    ...user,
    text: `${user.name} has ${user.apples.length} apples`,
  }));
}

export function checkAnyUserHasApple(users) {
  return users.reduce((acc, user) => [
    ...acc,
    ...user.apples,
  ], []).length > 0;
}

export function getMappedUsers() {
  return loadUsers()
    .then(mapUsers);
}
