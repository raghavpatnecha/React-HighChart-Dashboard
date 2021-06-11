import advertisementSpent from "../models/advertisementSpent.js";
import mongoose from "mongoose";
//


export const getAdvertisementSpent = async (req, res) => {
    try {
        const advSpent = await advertisementSpent.find();
        return res.status(200).json(advSpent);
    } catch(err) {
        return res.status(404).json({ message: err.message });
    }
}

export const postAdvertisementSpent = async (req, res) => {
    try {
        const advSpent = new advertisementSpent(req.body);
        await advSpent.save();
        return res.status(200).json(advSpent);
    } catch(err) {
        return res.status(404).json({ message: err.message });
    }
}

export const deleteAdvertisementSpent = async (req, res) => {
    try {   
        await advertisementSpent.deleteOne({_id: req.params.id});
        return res.status(200).json({message: "Delete Success"});
    } catch(err) {
        return res.status(404).json({ message: err.message });
    }
}


export const updateAdvertisementSpent = async (req, res) => {
    try {
        await advertisementSpent.findByIdAndUpdate(req.params.id, req.body);
        const adSpentAll = await advertisementSpent.findOne({_id: req.params.id});
        return res.status(200).json(adSpentAll);
    } catch(err) {
        return res.status(404).json({ message: err.message });
    }
}

//
