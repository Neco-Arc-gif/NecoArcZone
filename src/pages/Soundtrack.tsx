import Section from '../components/Section';

function Soundtrack() {
  const soundtracks = [
    {
      title: 'A Thousand Miles - Neco Arc (Full Version)',
      url: 'https://www.youtube.com/embed/Ddpx0JLOH6o',
    },
    {
      title: 'Burenyuu~ Theme',
      url: 'https://www.youtube.com/embed/5tlM13Kba0o',
    },
    {
      title: "Melty Blood Type Lumina OST - Great Cat's Village R (Neco-Arc's Theme)",
      url: 'https://www.youtube.com/embed/wcpQ3aarHRU',
    },
    {
      title: 'Another Episode - Neco Arc Chaos theme [Extended]',
      url: 'https://www.youtube.com/embed/MEROzyoSIn8',
    },
    {
      title: 'neco arc dilemma (meow) extended',
      url: 'https://www.youtube.com/embed/XisJD8V1Rqw',
    },
  ];

  return (
    <Section id="soundtrack" title="Soundtrack">
      <div className="prose prose-purple max-w-none mx-auto">
        <p className="text-lg mb-4 text-center">
          Dive into the chaotic and legendary soundtrack of Neco Arc! Below, you’ll find some of the most iconic tracks that define the meme-worthy energy of this beloved character.
        </p>
        <div className="space-y-8">
          {soundtracks.map((track, index) => (
            <div
              key={index}
              className="bg-purple-50 p-4 rounded-lg shadow-md max-w-3xl mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{track.title}</h3>
              <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                {/* Centered and responsive iframe */}
                <iframe
                  src={track.url}
                  title={track.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 italic mt-8 text-center">
          Note: All videos are embedded from YouTube and are the property of their respective creators. This page is intended for fan enjoyment only.
        </p>
      </div>
    </Section>
  );
}

export default Soundtrack;
