import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Marcacao from "./pages/Marcacao";
import MassagemDesportiva from "./pages/MassagemDesportiva";
import Massagemterapeutica from "./pages/Massagemterapeutica";
import Ventosaterapia from "./pages/Ventosaterapia";
import Pressoterapia from "./pages/Pressoterapia";
import Osteopatia from "./pages/Osteopatia";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/marcacao" element={<Marcacao />} />
        <Route path="/massagemDesportiva" element={<MassagemDesportiva />} />
        <Route path="/massagemTerapeutica" element={<Massagemterapeutica />} />
        <Route path="/ventosaterapia" element={<Ventosaterapia />} />
        <Route path="/osteopatia" element={<Osteopatia />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
