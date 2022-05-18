import { Schema, model, models } from "mongoose";

export const certificatesSchema = new Schema({
  company: String,
  time: String,
  title: String,
});

const Certificates = model("certificates", certificatesSchema);

export default Certificates;
