import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ListPage from "./Pages/ItemListPage/ListPage";

function App() {
  const appTitle = "Travel Packing List Application";

  return (
    <div className="App">
      <Header title={appTitle} />
      <main>
        <ListPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
