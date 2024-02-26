import { Routes, Route } from "react-router-dom";
// === Start Routes ===
import Home from "../views/home";
import Not_Found from "../views/not_found";
import Test from "../views/test";
// === End Routes ===

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={"*"} element={<Not_Found />} />
        <Route path={"/test"} element={<Test />} />
      </Routes>
    </>
  );
};

export default Routers;
