import { useState } from "react";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_PRODUCT = gql`
  mutation createProducts(
    $title: String!
    $price: Int!
    $description: String!
    $state: Boolean!
  ) {
    createProducts(
      title: $title
      price: $price
      description: $description
      state: $state
    ) {
      title
    }
  }
`;
export const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const [createProducts] = useMutation(CREATE_PRODUCT);

  const submit = (e) => {
    e.preventDefault();
    console.log(title, description, price);
    let state = true;
    createProducts({
      variables: {
        title: title,
        price: Number(price),
        description: description,
        state: true,
      },
    });
  };

  return (
    <div className="mt-2">
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success form-control">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
