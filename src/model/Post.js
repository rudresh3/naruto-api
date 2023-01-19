const mongoose = require("mongoose");
//narutoList
const narutoList = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    village:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required: true,
    },
    rank:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    avatarSrc:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('narutoList', narutoList);