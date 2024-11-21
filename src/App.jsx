import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import NoPage from "./pages/NoPage";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Nav />
      <hr />
      <Routes>
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
