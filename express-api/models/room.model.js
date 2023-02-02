const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsSchema = new Schema({
    image: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    categories: {
        type: String,
        enum: ['service', 'newportfolio', 'brandingprotfolio', 'webportfolio', 'aboutus', 'testmonials']
    },
    tags: String,
    title: String,
    description: String,

}, {
    timestamps: true
})

var roomModel = mongoose.model('project', newsSchema);

module.exports = roomModel;