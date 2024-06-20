import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ItemListPage from "./Pages/ItemListPage/ItemListPage";

function App() {
  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/item-page/:gender" element={<ItemListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
}
export default App;
