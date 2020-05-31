const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  symptoms: {
    type: [],
    required: true
  },
  status: String,
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", UserSchema);
