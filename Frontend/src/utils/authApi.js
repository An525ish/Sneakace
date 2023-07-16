import { postApi, fetchApi } from './api'; // Import the postApi and fetchApi functions from the given file

export function createUser(userData) {
  return new Promise(async (resolve) => {
    try {
      const response = await postApi('/auth/signup', userData); // Use postApi function instead of fetch
      resolve({ data: response.data });
    } catch (error) {
      resolve({ error });
    }
  });
}

export async function loginUser (loginInfo) {
  // return new Promise(async (resolve) => {
    try {
      const response = await postApi('/auth/login', loginInfo); // Use postApi function instead of fetch
      return response.data;
    } catch (error) {
      return error;
    }
  // });
}

export function checkAuth() {
  return new Promise(async (resolve) => {
    try {
      const response = await fetchApi('/auth/check'); // Use fetchApi function instead of fetch
      if (response.status === 200) {
        resolve({ data: response.data });
      } else {
        resolve({ error: response.data });
      }
    } catch (error) {
      resolve({ error });
    }
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetchApi('/auth/logout'); // Use fetchApi function instead of fetch
      if (response.status === 200) {
        resolve({ data: 'success' });
      } else {
        resolve({ error: response.data });
      }
    } catch (error) {
      console.log(error);
      resolve({ error });
    }
  });
}

export function resetPasswordRequest(email) {
  return new Promise(async (resolve) => {
    try {
      const response = await postApi('/auth/reset-password-request', { email }); // Use postApi function instead of fetch
      if (response.status === 200) {
        resolve({ data: response.data });
      } else {
        resolve({ error: response.data });
      }
    } catch (error) {
      resolve({ error });
    }
  });
}

export function resetPassword(data) {
  return new Promise(async (resolve) => {
    try {
      const response = await postApi('/auth/reset-password', data); // Use postApi function instead of fetch
      if (response.status === 200) {
        resolve({ data: response.data });
      } else {
        resolve({ error: response.data });
      }
    } catch (error) {
      resolve({ error });
    }
  });
}