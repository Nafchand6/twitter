import { ImagesearchRoller, LocalPlayOutlined } from "@mui/icons-material";
import "./App.css";
// import Appbar from "./components/Appbar";
// import ResponsiveDrawer from "./components/ResponsiveDrawer";
// import BottomAppbar from "./components/BottomAppbar";
import Sidebar from "./Sidebar";
// import SidebarOption from "./SidebarOption";
// import Feed from "./Feed";
// import TweetBox from "./TweetBox";
// import Widgets from "./Widgets";
import Home from "./Home";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Explore from "./Explore";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Routes path="/" index element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;

function NoMatch() {
  return (
    <div>
      <h2>404</h2>
      <p>
        <Link to="/">This Page is not Available</Link>
      </p>
    </div>
  );
}
