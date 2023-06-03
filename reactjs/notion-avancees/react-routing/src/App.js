import { Routes, Route } from "react-router-dom";
import { MyNavbar } from "./app/components/navbar/Navbar";
import {Home} from './app/components/home/Home';
import {About} from './app/components/about/About';
import {Contact} from './app/components/contact/Contact';
import { Profile } from "./app/components/profile/Profile";

function App() {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
