var mongoose = require('mongoose')


// this.title = config.title.value
// this.size = config.size.value
// this.rooms = config.rooms.value
// this.year = config.year.value
// this.price = config.price.value
// this.baths = config.baths.value
// this.school = config.school.value
// this.contact = config.contact.value
// this.location = config.location.value
// this.neighborhood = config.neighborhood.value
// this.description = config.description.value
// this.img = config.img.value

var schema = new mongoose.Schema({
    title: { type: String, requires: true },
    size: { type: Number },
    rooms: { type: Number, $gt: 0 },
    baths: { type: Number, $gt: 0 },
    year: { type: Number },
    price: { type: Number, require: true },
    location: { type: String },
    description: { type: String },
    contact: { type: String, required: true },
    img: { type: String, default: '//placehold.it/200x200' }
});

module.exports = mongoose.model('Property', schema);