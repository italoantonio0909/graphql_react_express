const TypeDefsProduct = `
    type Query{
        getProducts:[Product!]
    }
    
    type Mutation{
        createProducts(
            title:String!,
            price:Int!
            description:String!
            state:Boolean!):Product
    }

    type Product{
        id:ID
        title:String!
        price:Int!
        description:String!
        state:Boolean!
    }
`;

module.exports = TypeDefsProduct;
