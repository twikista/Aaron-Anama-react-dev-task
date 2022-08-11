import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Products />
      </Main>
    </div>
  );
}

export default App;
