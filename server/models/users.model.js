const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
    username: {
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    uploadedGifs: {
        type: Array
    }
}
);

module.exports = moongose.model('User', UserSchema);
