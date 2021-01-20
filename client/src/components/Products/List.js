import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GETPRODUCTS = gql`
  {
    getProducts {
      title
    }
  }
`;
export const List = () => {
  const { loading, error, data } = useQuery(GETPRODUCTS);
  if (loading) {
    return <div className="alert alert-info">Cargando</div>;
  }
  if (error) {
    return <div className="alert alert-danger">Ocurrió un error</div>;
  }
  console.log(data);
  return <div>hello</div>;
};
