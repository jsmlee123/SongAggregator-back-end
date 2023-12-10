import { findUserById } from "../users/dao.js";
import * as dao from "./dao.js";


function ReviewRoutes(app) {
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };

    const findReviewsByUserID = async (req,res) => {
        const { uid } = req.params;
        const reviews = await dao.findReviewsByUserID(uid);
        res.json(reviews);
    };

    const findReviewsBySongID = async (req,res) => {
        const { sid } = req.params;
        const reviews = await dao.findReviewsBySongID(sid);
        res.json(reviews);
    };

    const createReview = async (req, res) => {
        const { UserId, SongId, review } = req.body;
        const rev = await dao.createReview({UserId, SongId, review});
        res.json(rev);
    };

    const deleteReview = async (req, res) => {
        const { rid } = req.params;
        const status = await dao.deleteReview(rid);
        res.json(status);
    };

    const updateReview = async (req, res) => {
        const { rid } = req.params;
        const body = req.body;
        const status = await dao.updateReview(rid, body);
        res.json(status);
    };

    const getReviewer = async (req, res) => {
        const { rid } = req.params;
        const review = await dao.findReviewsId(rid);
        const user = await findUserById(review.UserId);
        res.json(user);
    };

    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/id/:uid", findReviewsByUserID);
    app.get("/api/reviews/song/:sid", findReviewsBySongID);
    app.post("/api/reviews", createReview);
    app.delete("/api/reviews/:rid", deleteReview);
    app.put("/api/reviews/:rid", updateReview);
    app.get("/api/reviews/user/:rid", getReviewer);
}

export default ReviewRoutes;
