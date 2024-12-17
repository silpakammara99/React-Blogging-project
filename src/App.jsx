import Topbar from "./components/navbar/topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register/>} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login/>} />
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/write" element={currentUser ? <Write/> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings/> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
