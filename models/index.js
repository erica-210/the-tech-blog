// import models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// Post belongs to a user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// Comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

// Comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

//export models
module.exports = { User, Post, Comment };
