import Section from '../components/Section';
import { Twitter, Github, Youtube } from 'lucide-react';

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="text-center">
        <p className="text-lg mb-6 px-4">
          Want to share your Neco Arc appreciation? Found a bug in the chaos? Just want to say "Burenyuu~"?
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          <a
            href="https://x.com/SuperHotTeapot"
            target="_blank"
            className="flex items-center gap-2 px-4 py-3 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors text-sm md:text-base"
          >
            <Twitter className="text-purple-700 w-5 h-5 md:w-6 md:h-6" />
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/Neco-Arc-gif/NecoArcZone"
            target="_blank"
            className="flex items-center gap-2 px-4 py-3 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors text-sm md:text-base"
          >
            <Github className="text-purple-700 w-5 h-5 md:w-6 md:h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://youtu.be/wx8M8arsZ30"
            className="flex items-center gap-2 px-4 py-3 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="text-purple-700 w-5 h-5 md:w-6 md:h-6" />
            <span>YouTube</span>
          </a>
        </div>
        <p className="text-sm text-gray-600 px-4">
          Please note: Any messages sent may be answered in Neco Arc speak. We are not responsible for any resulting confusion or sudden urges to say "Burenyuu~".
        </p>
      </div>
    </Section>
  );
}

export default Contact;
