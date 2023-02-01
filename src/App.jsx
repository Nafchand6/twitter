import { ImagesearchRoller } from "@mui/icons-material";
import "./App.css"
// import Appbar from "./components/Appbar"; 
// import ResponsiveDrawer from "./components/ResponsiveDrawer"; 
// import BottomAppbar from "./components/BottomAppbar"; 
import Sidebar from "./Sidebar";
// import SidebarOption from "./SidebarOption"; 
import Feed from "./Feed";
// import TweetBox from "./TweetBox";
import Widgets from "./Widgets";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";


function App() {
  
  return (

  <div style= {{display: 'flex'}}>  
  {/* <Appbar/> 
  <ResponsiveDrawer/> 
  <BottomAppbar/> */}
  <Sidebar/>
  {/* <SidebarOption/> */}
  <Feed/> 
  <Home />
  <Explore />
  {/* <TweetBox/> */}
  <Widgets/>
  
  
  <Routes>
    <Route>
    <Route path="/" component={Feed} exact />
    <Route path="/Home" component={Home} />
    <Route path="/Explore" component={Explore} />
    </Route>
  </Routes>
  </div>
  )
}

export default App;