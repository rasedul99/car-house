import { Route, Routes } from "react-router-dom";
import MyItems from "./components/MyItems";
import RequiredAuth from "./components/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import NotFound from "./Pages/NotFound/NotFound";
import Product from "./Pages/Product/Product";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route
          path="/inventory/:id"
          element={
            <RequiredAuth>
              {" "}
              <Product />
            </RequiredAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequiredAuth>
              {" "}
              <MyItems />
            </RequiredAuth>
          }
        />
        <Route path="/manage-inventories" element={<ManageInventories />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
