const Product = require("../../models/Product");

const Mutation = {
  async createProducts(_, { title, description, price, state }) {
    const product = await Product.create({ title, description, price, state });
    return product;
  },
};

module.exports = Mutation;
