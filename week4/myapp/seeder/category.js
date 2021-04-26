const fs = require('fs');
var mongoose = require('mongoose');
const Category = require('../model/category');

const getCategoryData = JSON.parse(fs.readFileSync('./mock-data/categories.json', 'utf8'));

function createCategory() {
  const getData = getCategoryData.body;
  getData.forEach((element) => {
    const addValues = {
      _id: mongoose.Types.ObjectId(),
      name: element.name,
      descriptions: element.description,
    };
    return Category.create(addValues);
  });
}
module.exports = { createCategory };
