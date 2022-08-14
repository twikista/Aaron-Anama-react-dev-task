import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        {/* <Products /> */}
        <Product />
      </Main>
    </div>
  );
}

export default App;
