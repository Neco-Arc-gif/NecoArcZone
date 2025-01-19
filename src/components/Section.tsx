import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-2xl mx-auto my-8 transform hover:scale-[1.02] transition-transform flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-purple-800 mb-6">{title}</h2>
      <div className="flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}


export default Section;
