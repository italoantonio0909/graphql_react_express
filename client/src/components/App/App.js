import { List } from "../Products/List";
import { Form } from "../Products/Form";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Form />
        </div>
        <div className="col-md-4">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
