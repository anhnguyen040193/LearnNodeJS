const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const SchemaTypes = mongoose.SchemaTypes;

const categorySchema = new Schema({
  //_id: Schema.Types.ObjectId --> by default
  //   _id: SchemaTypes.String,
  _id: Schema.Types.ObjectId,
  name: String,
  descriptions: String,
});

const Category = mongoose.model('Category', categorySchema, 'categories');

module.exports = Category;
