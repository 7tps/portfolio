'use client';

import { useState } from 'react';

export default function Options() {
  const [dark, setDark] = useState(true);

  function toggleDark() {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  }

  return (
    <section className="bg-retro-bg text-retro-fg font-pixel p-6 rounded-lg shadow-pixel border-4 border-retro-accent max-w-xl mx-auto mt-8">
      <h2 className="text-retro-accent text-xl mb-4">temp</h2>
      <button
        onClick={toggleDark}
        className="mb-6 px-4 py-2 bg-retro-accent text-retro-bg rounded border-2 border-retro-fg shadow-pixel hover:bg-retro-yellow hover:text-retro-bg transition-all"
      >
        temp
      </button>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="temp"
          className="p-2 rounded border-2 border-retro-accent bg-retro-fg text-retro-bg font-pixel"
        />
        <input
          type="email"
          placeholder="temp"
          className="p-2 rounded border-2 border-retro-accent bg-retro-fg text-retro-bg font-pixel"
        />
        <textarea
          placeholder="temp"
          className="p-2 rounded border-2 border-retro-accent bg-retro-fg text-retro-bg font-pixel"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-retro-accent text-retro-bg rounded border-2 border-retro-fg shadow-pixel hover:bg-retro-yellow hover:text-retro-bg transition-all"
        >
          temp
        </button>
      </form>
    </section>
  );
} 