import { useState, useEffect } from 'react';
import FlyingNeco from '../components/FlyingNeco';
import { useMusic } from '../context/MusicContext';
import { necoGifs } from '../data/necoData';
import { Volume2, VolumeX, Star } from 'lucide-react';

interface HomeProps {
  showHome: boolean;
  setShowHome: React.Dispatch<React.SetStateAction<boolean>>;
  clickCount: number;
  setClickCount: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<HomeProps> = ({ showHome, setShowHome, clickCount, setClickCount }) => {
  const { isMuted, toggleMute } = useMusic();
  const [flyingNecos, setFlyingNecos] = useState<number[]>([]);
  const [rotation, setRotation] = useState(0);
  const [giantNecos, setGiantNecos] = useState<number[]>([]);
  const [fadeInOutNecos, setFadeInOutNecos] = useState<number[]>([]);

  useEffect(() => {
    // Disable scrolling by setting body overflow to hidden
    document.body.style.overflow = 'hidden';

    return () => {
      // Cleanup by re-enabling scrolling
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (showHome) {
      document.title = 'BURENYUUUUUUUUU';
    }

  }, [showHome])

  useEffect(() => {
    if (clickCount > 0) {
      setShowHome(true)
    }
  }, [])

  // Handle flying Neco interval
  useEffect(() => {
    const interval = setInterval(() => {
      setFlyingNecos((prev) => [...prev, Date.now()].slice(-10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Handle the main Neco click (increases count and rotates image)
  const handleMainNecoClick = () => {
    setClickCount((prev) => prev + 1);
    setRotation((prev) => prev + 360);
  };

  // Handle giant and fade-in/fade-out Neco Arcs
  useEffect(() => {
    const interval = setInterval(() => {
      setGiantNecos((prev) => [...prev, Date.now()].slice(-5));
    }, 4000);

    const fadeInterval = setInterval(() => {
      setFadeInOutNecos((prev) => [...prev, Date.now()].slice(-5));
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(fadeInterval);
    };
  }, []);

  // Handle Burunyaa Click event
  const handleBurunyaaClick = () => {
    setShowHome(true);
  };

  return (
    <div className="relative min-h-screen min-w-full from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Fun "Burunyaa ??" interactive text */}
      {!showHome && (
        <div
          onClick={handleBurunyaaClick}
          className="absolute cursor-pointer text-4xl text-white font-bold animate-pulse text-center"
          style={{
            animation: 'bounce 2s infinite',
            position: 'absolute',
            top: `${Math.random() * 70 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: 'translate(-50%, -50%)',
            fontSize: '3rem',
          }}
        >
          Burunyaa ??
        </div>
      )}

      {/* Home Content */}
      {showHome && (
        <div
          className={`transition-opacity duration-1000 ease-in-out ${
            showHome ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Flying Neco */}
          {flyingNecos.map((key) => (
            <FlyingNeco key={key} position={key} />
          ))}

          {/* Giant Neco Arcs with Slow/Fade-in effects */}
          {giantNecos.map((key, index) => (
            <img
              key={key}
              src={necoGifs[0]}
              alt="Giant Neco Arc"
              className={`absolute object-contain transition-all duration-1000 animate-[fadeIn_2s_ease-in-out] ${
                index % 2 === 0 ? 'w-96 h-96' : 'w-80 h-80'
              } ${index % 2 === 0 ? 'opacity-80' : 'opacity-60'} `}
              style={{
                top: `${Math.random() * 60 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}
            />
          ))}

          {/* Fade-in and Fade-out Neco Arcs */}
          {fadeInOutNecos.map((key) => (
            <img
              key={key}
              src={necoGifs[0]}
              alt="Fade-in Neco Arc"
              className="absolute object-contain transition-all duration-1000 animate-[fadeInOut_5s_infinite] w-64 h-64 opacity-70"
              style={{
                top: `${Math.random() * 60 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}
            />
          ))}

          {/* Main Content */}
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-4xl font-bold text-purple-800 mb-8 animate-bounce text-center">
              Neco Arc Zone {Array(clickCount).fill('!').join('')}
            </h1>

            <div className="relative bg-[rgba(255,255,255,0.2)] rounded-lg shadow-xl p-6 max-w-md mx-auto hover:scale-105 transition-transform mb-12">
              <img
                src={necoGifs[0]}
                alt="Main Neco Arc"
                className="w-64 h-64 mx-auto object-contain cursor-pointer hover:scale-110 transition-transform"
                style={{ transform: `rotate(${rotation}deg)` }}
                onClick={handleMainNecoClick}
                draggable="false"
              />

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="animate-pulse" /> : <Volume2 className="animate-bounce" />}
              </button>

              {/* Click Message */}
              <p className="text-center mt-4 text-gray-600 italic animate-bounce">
                "Burenyuu~" - Neco Arc, {clickCount > 5 ? 'definitely' : 'probably'}
              </p>

              {/* Star Icon */}
              {clickCount > 5 && (
                <div className="absolute -top-4 -left-4 animate-spin">
                  <Star className="text-yellow-400" size={32} fill="currentColor" />
                </div>
              )}
            </div>

            {/* Footer Message */}
            <div className="text-sm text-purple-600 text-center mt-8">
              <p className="animate-pulse">Warning: May cause extreme happiness and/or confusion</p>
              <p className="mt-2">
                Click count: {clickCount} {clickCount > 10 && '🌈'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
