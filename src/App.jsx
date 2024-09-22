import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Userspage from "./pages/Userspage";
import Notfound from "./pages/Notfound";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* главная страница */}
      <Route path="/users" element={<Userspage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<Notfound />} />
      {/* обработка неизвестных маршрутов */}
    </Routes>
  );
}

export default App;
