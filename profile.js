/**
 * User profile management module
 */

function getProfile(userId) {
  // Mock profile data
  return {
    id: userId,
    name: 'John Doe',
    email: 'john@example.com'
  };
}

function updateProfile(userId, data) {
  // TODO: update profile
  return { success: true, data };
}

module.exports = { getProfile, updateProfile };
