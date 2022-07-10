import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route  path="/" element={user? <Home/>:<Register/>}/>
        <Route path="/register" element={user? <Home/>:<Register/>}/>
        <Route path="/login" element={user? <Home/>:<Login/>}/>
        <Route path="/write" element={user? <Write/>:<Register/>}/>
        <Route path="/settings" element={user? <Settings/>:<Register/>}/> 
        <Route path="/post/:postId" element={<Single/>}/>   
        <Route exact path="/about" element={<About/>}/> 
        <Route exact path="/contact" element={<Contact/>}/> 
        

      </Routes>
    </Router>
  );
}

export default App;
