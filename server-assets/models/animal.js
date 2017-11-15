var mongoose = require ('mongoose')










// this.title = config.title.value
// this.species = config.species.value
// this.age = config.age.value
// this.price = config.price.value
// this.color = config.color.value
// this.contact = config.contact.value
// this.location = config.location.value
// this.description = config.description.value
// this.img = config.img.value



var schema = new mongoose.Schema({
    title: { type: String, requires: true },
    species: { type: String },
    breed:{ type: String},
    age: { type: String},
    color: { type: String },
    price: { type: Number, require: true },
    location: { type: String },
    description: { type: String },
    contact: { type: String, required: true },
    img: { type: String, default: '//placehold.it/200x200' }
});

module.exports = mongoose.model('Animal', schema);