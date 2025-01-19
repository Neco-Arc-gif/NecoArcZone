import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { GlobalStateProvider } from './context/GlobalStateContext';
import { MusicProvider, useMusic } from './context/MusicContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
// import GalleryOfChaos from './pages/GalleryOfChaos';
import music1 from "./public/music/A Thousand Miles - Neco arc (FULL VERSION).mp3";
import Soundtrack from './pages/Soundtrack';
import { Volume2, VolumeX } from 'lucide-react';

const AppContent: React.FC = () => {
  const [isRainbow, setIsRainbow] = useState(false);
  const { isMuted, toggleMute } = useMusic(); // Access mute state and toggle function from context
  const [clickCount, setClickCount] = useState(0);
  const [showHome, setShowHome] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // Access the current route location

  useEffect(() => {
    if (!showHome) {
      navigate('/');
    }
  }, [showHome, navigate]);

  useEffect(() => {
    setIsRainbow(clickCount > 10);
  }, [clickCount]);

  return (
    <>
      {showHome && <Navbar />}
      <GlobalStateProvider>
        <div
          className={`min-h-screen ${
            isRainbow ? 'rainbow-bg' : 'bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200'
          } flex items-center justify-center pt-20 pb-12 px-4`}
        >
          {/* Audio */}
          {showHome && (
            <audio
              src={music1}
              autoPlay
              loop
              muted={isMuted}
            />
          )}

          {/* Floating Sound Button */}
          {showHome && location.pathname !== '/' && (
            <button
              onClick={toggleMute}
              className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-100 hover:bg-purple-200 shadow-lg transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="text-purple-700 w-6 h-6" />
              ) : (
                <Volume2 className="text-purple-700 w-6 h-6" />
              )}
            </button>
          )}

          <Routes>
            <Route
              path="/"
              element={<Home showHome={showHome} setShowHome={setShowHome} clickCount={clickCount} setClickCount={setClickCount} />}
            />
            <Route path="/about" element={<About />} />
            {/* <Route path="/gallery-of-chaos" element={<GalleryOfChaos />} /> */}
            <Route path="/soundtrack" element={<Soundtrack />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </GlobalStateProvider>
    </>
  );
};

const App: React.FC = () => (
  <MusicProvider>
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  </MusicProvider>
);

export default App;
