import mongoose from "mongoose";

const CardSchema = mongoose.Schema({
  name: String,
  imageURL: String,
});

export default mongoose.model("cards", CardSchema);
