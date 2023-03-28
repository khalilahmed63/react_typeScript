import "./App.css";
import HomeVariantA from "./components/VariantA/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsVariantA from "./components/VariantA/Projects/ProjectsVariantA";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeVariantA />} />
            <Route path="Projects" element={<ProjectsVariantA />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
