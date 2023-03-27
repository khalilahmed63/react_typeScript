import "./App.css";
import Main from "./components/VariantA/Layouts/Main";
import HomeVariantA from "./components/VariantA/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<HomeVariantA />} />
            {/* <Route path="About" element={<About mode={mode} />} /> */}
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
}

export default App;
