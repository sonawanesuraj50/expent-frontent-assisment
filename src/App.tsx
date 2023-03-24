import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import ProjectForm from "modules/projectForm";
import WorkFlow from "./modules/workFlow";

function App() {
  const renderNavigationLink = () => {
    return (
      <h1 className="AppContainer">
        <div className="pageText">
          <NavLink to="/workFlow" className="navLink">
            Page 1
          </NavLink>
        </div>
        <div className="pageText">
          <NavLink to="/form" className="navLink">
            Page 2
          </NavLink>
        </div>
      </h1>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={renderNavigationLink()} />
        <Route path={"/workFlow"} element={<WorkFlow />} />
        <Route path={"/form"} element={<ProjectForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
