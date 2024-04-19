const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin');

const authMiddleware = require('../middleware/is-authenticated');

// USERS
router.get('/view-users', adminControllers.getUsers);
router.get('/view-users/:userId', adminControllers.getUser);

// POSTS
router.get('/view-posts', adminControllers.getPosts);
router.get('/view-posts/:userId', adminControllers.getPostsByUser);
router.get('/view-posts/:userId/:postId', adminControllers.getSinglePostByUser);

// GROUPS
router.get('/view-groups', adminControllers.getGroups);
router.get('/view-groups/:groupId', adminControllers.getSingleGroup);

// DISCUSSIONS
router.get('/view-discussions', adminControllers.getDiscussions);
router.get(
  '/view-discussions/:discussionId',
  adminControllers.getSingleDiscussion
);
router.get(
  '/view-discussions/:discussionId/users',
  adminControllers.getUsersInSingleDiscussion
);

// CHATS
router.get('/view-chats', adminControllers.getChats);
router.get('/view-chats/:chatId', adminControllers.getSingleChat);
router.get('/view-chats/:chatId/users', adminControllers.getUsersInSingleChat);

module.exports = router;
