const projects = [
  { name: 'temp', type: 'temp', rarity: 'temp', icon: '💻' },
  { name: 'temp', type: 'temp', rarity: 'temp', icon: '🎨' },
  { name: 'temp', type: 'temp', rarity: 'temp', icon: '🕹️' },
  { name: 'temp', type: 'temp', rarity: 'temp', icon: '📝' },
];

export default function Inventory() {
  return (
    <section className="bg-retro-bg text-retro-fg font-pixel p-6 rounded-lg shadow-pixel border-4 border-retro-accent max-w-2xl mx-auto mt-8">
      <h2 className="text-retro-accent text-xl mb-4">temp</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((item, idx) => (
          <div key={idx} className="bg-retro-fg text-retro-bg p-4 rounded-lg border-2 border-retro-accent flex flex-col items-center shadow-pixel">
            <span className="text-3xl mb-2">{item.icon}</span>
            <span className="font-bold">{item.name}</span>
            <span className="text-retro-accent text-xs">{item.type}</span>
            <span className="text-retro-yellow text-xs">{item.rarity}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 