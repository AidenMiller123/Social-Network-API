const router = require('express').Router();
// imports all the functions from the user controller file
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  // gets all users
  .get(getUsers)
  // post creates a new user
  .post(createUser);

// /api/users/:userId
router.route('/:userId')
  // gets a single user
  .get(getSingleUser)
  // updates a user 
  .put(updateUser)
  // deletes a user
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  // adds a friend to a user
  .post(addFriend);

// /api/users/:userId/friends/:friendId
// deletes a friend from a user
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;