const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  { timestamps: true }
);

mongoose.model("Project", ProjectSchema);
