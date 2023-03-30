<<<<<<< Updated upstream
import { ImagesearchRoller } from "@mui/icons-material";
import "./App.css"
import Appbar from "./components/Appbar"; 
import ResponsiveDrawer from "./components/ResponsiveDrawer"; 
import BottomAppbar from "./components/BottomAppbar"; 
import Sidebar from "./Sidebar";
import SidebarOption from "./SidebarOption"; 
import Feed from "./Feed";
import TweetBox from "./TweetBox";
import Widgets from "./Widgets";


function App() {
  
  return (
    <div style= {{display: 'flex'}}>  
  {/* <Appbar/> 
  <ResponsiveDrawer/> 
  <BottomAppbar/> */}
  <Sidebar/>
  {/* <SidebarOption/> */}
  <Feed/> 
 
  {/* <TweetBox/> */}
  <Widgets/>
  
       
        </div>
  )
=======
// import { ImagesearchRoller, LocalPlayOutlined } from "@mui/icons-material";
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
import { Routes, Route, Outlet } from "react-router-dom";
import Explore from "./Explore";




function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Routes path="/" index element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    
    
      
    </div>
  );
>>>>>>> Stashed changes
}

export default App;

