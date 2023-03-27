import "./App.css";
import Main from "./components/VariantA/Layouts/Main";
import HomeVariantA from "./components/VariantA/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsVariantA from "./components/VariantA/Projects/ProjectsVariantA";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<HomeVariantA />} />
            <Route path="projects" element={<ProjectsVariantA />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
