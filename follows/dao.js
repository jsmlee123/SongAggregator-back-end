import model from "./model.js";

export const createUserFollowsUser = (followerId, followedId) =>
  model.create({ follower: followerId, followed: followedId });
export const deleteUserFollowsUser = (followerId, followedId) =>
  model.deleteOne({ follower: followerId, followed: followedId });
export const findUsersFollowingUser = (followedId) =>
  model.find({ followed: followedId });
export const findUsersFollowedByUser = (follwerId) =>
  model.find({ follower: follwerId });
export const findFollowByFollowerFollowing = (followerId, followedId) =>
  model.findOne({ follower: followerId, followed: followedId });
