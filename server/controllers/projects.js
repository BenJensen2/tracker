const mongoose = require("mongoose");
const Project = mongoose.model("Project")

module.exports = {
  index: (req, res) => {
    console.log("Index pinggg-ed");
    res.json({
      // Our response to this function being called
      message: "Hello",
    });
  },
}