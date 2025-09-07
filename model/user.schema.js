const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email: String,
    password: String,
    bookings:[{type:mongoose.Types.ObjectId,ref:"booking"}]
})
let User = mongoose.model("User", UserSchema);
module.exports = User;