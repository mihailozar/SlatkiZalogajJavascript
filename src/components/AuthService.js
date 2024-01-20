// AuthService.js - Simulated authentication logic
export const authenticateUser = (username, password) => {
    // Simulated user authentication logic
    if (username === 'user' && password === 'user') {
      return { username: 'user', role: 'user' };
    } else if (username === 'admin' && password === 'admin') {
      return { username: 'admin', role: 'admin' };
    }
    return null; // Invalid credentials
  };
  