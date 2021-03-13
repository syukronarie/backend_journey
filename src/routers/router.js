import { Router } from "express";
import { getDataFlickr } from "../controllers/flickrHandle";

const router = Router();

// Init Flickr Routes

router.get("/flickr", getDataFlickr);
// app.get("/", getDataFlickr);

export default router;
