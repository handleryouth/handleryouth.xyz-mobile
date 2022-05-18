import { Schema, model, models } from "mongoose";

export const projectsSchema = new Schema({
  description: String,
  image: String,
  linkDemo: String,
  linkRepo: String,
  title: String,
});

const Projects = model("projects", projectsSchema);

export default Projects;
