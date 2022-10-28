
const mongoose = require("mongoose");


const MovieSchema = new mongoose.Schema({
  Mname: {
    type: String,
    required: true,
  },
  imgLink: {
    type: String,
    required: true,
  },
  Summary: {
    type: String,
    required: true,
  },
 
});




const movie = mongoose.model("Movies", MovieSchema);
module.exports = movie;
