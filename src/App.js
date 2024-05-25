import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from './components/Footer'
import Contact from "./components/Contact";
import Reservation from "./components/Reservation";
import GalleryPage from "./components/GalleryPage";
import SpecialEmail from "./components/SpecialEmail";

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Content/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/reservation" element={<Reservation/>} />
          <Route exact path="/gallery" element={<GalleryPage/>} />
          <Route exact path="/about" element={<About/>}/> 
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <SpecialEmail />
        <Footer/>
    </BrowserRouter>
        
    
  );
}

export default App;
