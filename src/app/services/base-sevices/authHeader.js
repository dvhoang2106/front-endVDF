//The code above checks Local Storage for user item.
// If there is a logged in user with accessToken (JWT), return HTTP Authorization header. Otherwise, return an empty object.
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }