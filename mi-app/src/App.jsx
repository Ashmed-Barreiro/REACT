import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Details from "./pages/Details"
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/users" element ={<Users />}/>
        <Route path="*" element={<About />} />
        <Route path="/details/:id" element ={<Details />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </AppLayout>
  );
}