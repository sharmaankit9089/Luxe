import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner";
import CateringForm from "./components/sections/form.jsx";
import { HelmetProvider } from "react-helmet-async";
import ServiceCityPage from "./pages/ServiceCityPage";
import Locations from "./pages/Locations";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<CateringForm />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/:slug" element={<ServiceCityPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </div>
    </HelmetProvider>
  );
}

export default App;
