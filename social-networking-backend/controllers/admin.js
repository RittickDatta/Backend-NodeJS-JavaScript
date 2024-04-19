// USERS

exports.getUsers = (req, res, next) => {
  return res.status(200).send('getUsers');
};

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  console.log(userId);
  return res.send(`getUser: ${userId}`);
};

// POSTS

exports.getPosts = (req, res, next) => {
  return res.send('getPosts');
};

exports.getPostsByUser = (req, res, next) => {
  const userId = req.params.userId;

  return res.send(`'getPostByUser': ${userId}`);
};

exports.getSinglePostByUser = (req, res, next) => {
  const userId = req.params.userId;
  const postId = req.params.postId;

  return res.send(`getSinglePostByUser: ${userId} - ${postId}`);
};

// GROUPS

exports.getGroups = (req, res, next) => {
  return res.send('getGroups');
};

exports.getSingleGroup = (req, res, next) => {
  const groupId = req.params.groupId;

  res.send(`getSingleGroup: ${groupId}`);
};

// DISCUSSIONS

exports.getDiscussions = (req, res, next) => {
  return res.send('getDiscussions');
};

exports.getSingleDiscussion = (req, res, next) => {
  const discussionId = req.params.discussionId;

  return res.send(`getSingleDiscussion: ${discussionId}`);
};

exports.getUsersInSingleDiscussion = (req, res, next) => {
  const discussionId = req.params.discussionId;

  return res.send(`getUsersInSingleDiscussion: ${discussionId}`);
};

// CHATS

exports.getChats = (req, res, next) => {
  return res.send('getChats');
};

exports.getSingleChat = (req, res, next) => {
  const chatId = req.params.chatId;

  return res.send(`getSingleChat: ${chatId}`);
};

exports.getUsersInSingleChat = (req, res, next) => {
  const chatId = req.params.chatId;

  return res.send(`getUsersInSingleChat: ${chatId}`);
};
