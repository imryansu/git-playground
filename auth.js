/**
 * User authentication module
 * Provides login and logout functionality
 */

function login(username, password) {
  // Simple validation
  if (!username || !password) {
    return { success: false, error: 'Username and password required' };
  }

  // Mock authentication
  if (username === 'admin' && password === 'password') {
    return { success: true, token: 'mock-jwt-token' };
  }

  return { success: false, error: 'Invalid credentials' };
}

function logout(token) {
  // Mock logout - invalidate token
  if (token) {
    return { success: true, message: 'Logged out successfully' };
  }
  return { success: false, error: 'No token provided' };
}

module.exports = { login, logout };
