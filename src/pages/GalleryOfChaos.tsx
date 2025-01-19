import React, { useState } from 'react';
import { necoGifs } from '../data/necoData';
import { Star, Volume2, VolumeX, Trash2 } from 'lucide-react';
import Section from '../components/Section';

const GalleryOfChaos: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [chaoticElements, setChaoticElements] = useState<number[]>([]);
  const [memeText, setMemeText] = useState<string[]>([]);
  const [randomColor, setRandomColor] = useState<string>('bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200');
  const [vibration, setVibration] = useState(false);

  // Random Meme Text
  const memePhrases = [
    "Bruh", "I can't even", "Yasss Queen", "Nani?", "Such Wow", "Big Mood", "Epic Fail", "This is fine", "No Cap", "Simp", "YEET", "SEND IT!"
  ];

  // Function to trigger meme effects
  const triggerMemeEffects = () => {
    // Change background color randomly
    const colorChoices = [
      'bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200',
      'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600',
      'bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500',
      'bg-gradient-to-br from-green-400 via-teal-400 to-blue-500'
    ];
    setRandomColor(colorChoices[Math.floor(Math.random() * colorChoices.length)]);

    // Random vibration effect
    setVibration(true);
    setTimeout(() => setVibration(false), 300); // Vibration lasts 300ms

    // Random meme phrase
    setMemeText(prev => {
      const newMeme = memePhrases[Math.floor(Math.random() * memePhrases.length)];
      return [...prev, newMeme];
    });
  };

  // Handle Meme Chaos Button Click
  const handleClickChaos = () => {
    setRotation((prev) => prev + 360); // Keep rotating elements for extra chaos
    setChaoticElements((prev) => [...prev, Date.now()]);
    triggerMemeEffects();  // Trigger meme effects when clicked
  };

  // Function to clear chaotic elements
  const clearChaos = () => {
    setChaoticElements([]);  // Clear the chaotic elements (Neco Arc GIFs, stars, etc.)
    setMemeText([]);         // Clear the meme text elements
  };

  return (
    <Section id="gallery" title="Gallery of Meme Chaos">
      <div
        className={`relative min-h-screen ${randomColor} flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden ${vibration ? 'animate-shake' : ''}`} // Add shake effect if vibration is true
      >
        
        {/* Chaotic Neco Arcs */}
        {chaoticElements.map((key, index) => (
          <img
            key={key}
            src={necoGifs[0]} // You can randomize this to use different Neco Arc GIFs
            alt="Chaotic Neco Arc"
            className={`absolute object-contain transition-all duration-1000 animate-[fadeInOut_4s_ease-in-out] ${
              index % 2 === 0 ? 'w-96 h-96' : 'w-80 h-80'
            } ${index % 2 === 0 ? 'opacity-80' : 'opacity-60'} animate-[rotate_2s_ease-in-out]`}
            style={{
              top: `${Math.random() * 60 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}

        {/* Random Stars */}
        {chaoticElements.map((key, index) => (
          <div
            key={key}
            className={`absolute text-yellow-400 animate-pulse ${index % 3 === 0 ? 'top-[10%]' : 'top-[60%]'}`}
            style={{
              left: `${Math.random() * 80 + 10}%`,
              transform: `scale(${Math.random() * 0.5 + 1}) rotate(${Math.random() * 360}deg)`,
            }}
          >
            <Star size={32} fill="currentColor" />
          </div>
        ))}

        {/* Meme Text */}
        {memeText.map((text, index) => (
          <div
            key={index}
            className={`absolute text-white text-4xl font-bold ${index % 2 === 0 ? 'animate-pulse' : 'animate-bounce'} animate-[scale_2s_ease-in-out]`}
            style={{
              top: `${Math.random() * 60 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {text}
          </div>
        ))}

        {/* Trash Icon - Now clearing chaos when clicked */}
        <div
          className="absolute bottom-4 right-4 cursor-pointer animate-bounce"
          onClick={clearChaos} // Call the clearChaos function on click
        >
          <Trash2 size={48} className="text-gray-700 hover:text-red-600" />
        </div>

        {/* Main Meme Chaos Button */}
        <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto mt-16 hover:scale-105 transition-transform mb-12">
          <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">Unleash the Meme Chaos!</h1>
          <button
            className="w-full p-4 text-2xl text-white bg-purple-600 rounded-full hover:bg-purple-800 transition"
            onClick={handleClickChaos}
          >
            Click to Chaos!
          </button>

          {/* Mute/Unmute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="animate-pulse" /> : <Volume2 className="animate-bounce" />}
          </button>

          {/* Background Sound */}
          <audio
            src="https://www.youtube.com/068adf85-92bc-4ffd-b14c-8004fabece16"
            autoPlay
            loop
            muted={isMuted}
          />
        </div>

        {/* Footer Note */}
        <div className="text-sm text-purple-600 text-center mt-8">
          <p className="animate-pulse">Warning: May cause extreme laughter and confusion!</p>
          <p className="mt-2">A Tribute to the Meme Queen Neco Arc</p>
        </div>
      </div>
    </Section>
  );
};

export default GalleryOfChaos;
