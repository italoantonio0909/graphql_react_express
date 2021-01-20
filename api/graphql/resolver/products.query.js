const Product = require("../../models/Product");

const Query = {
  async getProducts() {
    const products = await Product.find();
    return products;
  },
};

module.exports = Query;
