const quests = [
  { title: 'temp', status: 'temp', xp: 'temp' },
  { title: 'temp', status: 'temp', xp: 'temp' },
  { title: 'temp', status: 'temp', xp: 'temp' },
];

export default function QuestLog() {
  return (
    <section className="bg-retro-bg text-retro-fg font-pixel p-6 rounded-lg shadow-pixel border-4 border-retro-accent max-w-xl mx-auto mt-8">
      <h2 className="text-retro-accent text-xl mb-4">temp</h2>
      <ul className="space-y-3">
        {quests.map((quest, idx) => (
          <li key={idx} className="flex justify-between items-center bg-retro-fg text-retro-bg p-3 rounded border-2 border-retro-accent shadow-pixel">
            <span>{quest.title}</span>
            <span className="text-xs px-2 py-1 rounded bg-retro-magenta text-retro-bg">{quest.status}</span>
            <span className="text-retro-accent text-xs">{quest.xp}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 