import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Culture from './pages/Culture';
import Community from './pages/Community';
import Traditions from './pages/Traditions';
import Cosmovision from './pages/Cosmovision';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/UI/ScrollToTop';
import ScrollToTopButton from './components/UI/ScrollToTopButton';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/community" element={<Community />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/cosmovision" element={<Cosmovision />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
