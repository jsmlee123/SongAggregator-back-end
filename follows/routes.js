import { findUserById } from "../users/dao.js";
import * as dao from "./dao.js";

function FollowsRoutes(app) {
  const createUserFollowsUser = async (req, res) => {
    const { followerId, followedId } = req.params;
    if (followerId === undefined) {
      const follower = req.session.currentUser._id;
      const currFollow = await dao.findFollowByFollowerFollowing(followerId, followedId);
      if (currFollow) {
        res.json(currFollow);
        return;
      }

      const follow = await dao.createUserFollowsUser(follower, followedId);
      res.json(follow);
      return;
    }
    const follow = await dao.createUserFollowsUser(followerId, followedId);
    res.json(follow);
  };
  const deleteUserFollowsUser = async (req, res) => {
    const { followerId, followedId } = req.params;
    const status = await dao.deleteUserFollowsUser(followerId, followedId);
    res.json(status);
  };
  const findUsersFollowingUser = async (req, res) => {
    const { followedId } = req.params;
    const userIds= await dao.findUsersFollowingUser(followedId);

    const users = [];
    for (let i = 0; i < userIds.length; i +=1) {
      users.push( await findUserById(userIds[i].follower));
    }

    res.json(users);
  };
  const findUsersFollowedByUser = async (req, res) => {
    const { followerId } = req.params;
    const userIds = await dao.findUsersFollowedByUser(followerId);
    
    const users = [];
    for (let i = 0; i < userIds.length; i +=1) {
      users.push( await findUserById(userIds[i].follower));
    }

    res.json(users);
  };

  app.post("/api/users/follows/:followedId", createUserFollowsUser);
  app.post("/api/users/:followerId/follows/:followedId", createUserFollowsUser);
  app.delete(
    "/api/users/:followerId/follows/:followedId",
    deleteUserFollowsUser
  );
  app.get("/api/follows/followers/:followedId", findUsersFollowingUser);
  app.get("/api/follows/following/:followerId", findUsersFollowedByUser);
}

export default FollowsRoutes;
