
import './App.css';
import Navbar from './Component/Navbar.js';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Footer from './Component/Footer.js';
import Skills from './Component/Skills.js';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Contact from './Component/Contact.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    {/* <Footer /> */}
     
    </div>
  );
}

export default App;
