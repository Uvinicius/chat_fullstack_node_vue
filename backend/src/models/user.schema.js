const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const saltRounds = 10;


const UserSchema = new Schema({

    email:{
        type:String,
        require:true,
        index:{
            unique:true
        }
    },


    name:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }

})


UserSchema.pre('Save', (next) =>{
    this.password = bcryptjs.hashSync(this.password, saltRounds)
    next()
})


module.exports = mongoose.model('Users', UserSchema);