import { Schema, model, models } from "mongoose";

export const experiencesSchema = new Schema({
  description: String,
  time: String,
  title: String,
});

const Experience = model("experiences", experiencesSchema);

export default Experience;
