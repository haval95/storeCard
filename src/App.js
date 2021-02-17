import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Boot from 'react-bootstrap';
import ProductList from "./components/ProductList";
import {ProductProvider} from "./components/Context";
import Card from "./components/Card"
import {CardProvider} from "./components/CardContext"
import './App.css';


function App() {
  return (
    <Boot.Container>
    <div className="App">
      <ProductProvider>
        <CardProvider>
        <Boot.Row className="justify-content-end">
          <Card />
        </Boot.Row>
        
          <ProductList />
      
        </CardProvider>
      </ProductProvider>
    </div>
    </Boot.Container>
  );
}

export default App;
