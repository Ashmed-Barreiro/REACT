import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/users" element ={<Users />}/>
        <Route path="*" element={<About />} />
      </Routes>
    </AppLayout>
  );
}