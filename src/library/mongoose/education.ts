import { Schema, model, models } from "mongoose";

export const educationsSchema = new Schema({
  description: String,
  time: String,
  title: String,
});

const Education = model("educations", educationsSchema);

export default Education;
