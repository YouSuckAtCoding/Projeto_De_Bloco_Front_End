import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout.js'
import Home from './Components/Home/Home.js'
import Login from './Components/Login/Login.js'
import './App.css';
import CreatePost from "./Components/CreatePost/CreatePost.js";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
