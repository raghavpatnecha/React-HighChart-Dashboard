//Schema Name: Advertisement_Spent
//Fields: ID, ChannelName, Views, Spent_in_usd, date

import mongoose from "mongoose";
//orm
const advertisementSpentSchema = new mongoose.Schema({
    channelName: String,
    views: Number,
    spentInUsd: Number,
    date: {
        type: Date,
        default: new Date()
    },
});
//
const advertisementSpent = mongoose.model("advertisementSpent", advertisementSpentSchema);
export default advertisementSpent;
