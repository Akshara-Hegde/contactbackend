const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    name:{
        type: String,
        required: [true, "Please add name"],

    },
    email:{
        type: String,
        required: [true, "Please add email"],
        
    },
    phone:{
        type: String,
        required: [true, "Please add phone number"],
    },

},{
    timestamps: true
})
module.exports = mongoose.model("Data",dataSchema)