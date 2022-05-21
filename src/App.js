import { Route, Routes } from "react-router-dom";
import RequiredAuth from "./components/RequireAuth";
import About from "./Pages/About/About";
import AddInventoryItem from "./Pages/AddProduct/AddInventoryItem";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import MyItem from "./Pages/MyItem/MyItem";
import NotFound from "./Pages/NotFound/NotFound";
import Product from "./Pages/Product/Product";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<About />} />
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
          path="/myitem"
          element={
            <RequiredAuth>
              {" "}
              <MyItem />
            </RequiredAuth>
          }
        />
        <Route path="/manage-inventories" element={<ManageInventories />} />
        <Route
          path="/add-inventory-item"
          element={
            <RequiredAuth>
              {" "}
              <AddInventoryItem />
            </RequiredAuth>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
