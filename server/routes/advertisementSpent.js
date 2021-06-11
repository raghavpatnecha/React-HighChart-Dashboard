import express from "express";
import { getAdvertisementSpent , postAdvertisementSpent, deleteAdvertisementSpent, updateAdvertisementSpent } from "../controllers/advertisementSpent.js";

//
const router = express.Router();
//
router.get('/', getAdvertisementSpent);
router.post('/', postAdvertisementSpent);
router.put('/:id', updateAdvertisementSpent);
router.delete('/:id', deleteAdvertisementSpent);
//
export default router;