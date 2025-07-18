export default function Stats() {
  return (
    <section className="bg-retro-bg text-retro-fg font-pixel p-6 rounded-lg shadow-pixel border-4 border-retro-accent max-w-xl mx-auto mt-8">
      <div className="flex items-center gap-6 mb-4">
        <div className="w-20 h-20 bg-retro-accent rounded-full flex items-center justify-center text-4xl">
          <span role="img" aria-label="avatar">👾</span>
        </div>
        <div>
          <h2 className="text-2xl text-retro-accent mb-2">temp</h2>
          <p className="text-retro-fg">temp</p>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-4 text-retro-fg">
        <li>temp</li>
        <li>temp</li>
        <li>temp</li>
        <li>temp</li>
      </ul>
      <p className="mt-4 text-retro-accent">temp</p>
    </section>
  );
} 