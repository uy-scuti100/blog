import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div className="max-w-[1400px] min-h-screen w-full">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Register />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
