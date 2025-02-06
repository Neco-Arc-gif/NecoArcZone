import Section from '../components/Section';

function About() {
  return (
    <Section id="about" title="About Neco Arc">
      <div className="prose prose-purple max-w-none">
        <p className="text-lg mb-4">
          Neco Arc is a legendary meme character from the Tsukihime universe, specifically from the parody spin-off game "Neco-Arc Chaos Channel." Known for her chaotic energy and iconic "Burenyuu~" catchphrase, she's become an internet sensation.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Species: Cat-Human Hybrid (allegedly)</li>
            <li>Hobbies: Causing chaos, breaking the fourth wall</li>
            <li>Special Skills: Being extremely memeable</li>
            <li>Favorite Activity: Making nonsensical appearances</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 italic">
          Note: This website is a fan creation and is not affiliated with any official Tsukihime or Type-Moon properties. It exists purely for entertainment purposes and to spread joy through chaos.
        </p>
      </div>
    </Section>
  );
}

export default About;
