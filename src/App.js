import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./page/Content";
import Header from "./page/Header";
import Nav from "./page/Nav";
import Home from "./page/Home";
import General from "./page/General";
import NoPage from "./page/NoPage";


function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="general" element={<General />} />
            <Route path="content" element={<Content />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
