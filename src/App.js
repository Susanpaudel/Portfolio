import {Home} from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Work } from './components/Work';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Photo } from './components/Photo';

function App() {
  return (
    <>
      <Router>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/work" element={<Work/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/photo" element={<Photo/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
