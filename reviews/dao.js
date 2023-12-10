import model from "./model.js";

export const findAllReviews = () => model.find();
export const findReviewsId = (id) => model.findById(id);
export const findReviewsByUserID = (UserId) =>(
  model.find({ UserId }));
export const findReviewsBySongID = (SongId) =>(
  model.find({ SongId }));
export const createReview = (review) => 
  model.create(review);
export const updateReview = (rid, review) =>
  model.updateOne({ _id: rid }, { $set: review });
export const deleteReview = (rid) => model.deleteOne({ _id: rid });
