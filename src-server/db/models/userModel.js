const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  username:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  personalName:  { type: String, required: true },
  avatarUrl:     { type: String },
  following:     [ {type: Schema.Types.ObjectId, ref: 'User'} ],
  followers:     [ {type: Schema.Types.ObjectId, ref: 'User'} ],
  createdAt:     { type: Date, default: Date.now }

})

module.exports = {
  User: mongoose.model('User', usersSchema)
}
