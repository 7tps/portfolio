import Menu from '../components/Menu';
import Stats from '../components/Stats';

export default function Home() {
  return (
    <div className="min-h-screen bg-retro-bg text-retro-fg flex flex-col sm:flex-row font-pixel">
      <aside className="sm:h-screen sm:sticky top-0 flex-shrink-0 flex justify-center sm:justify-start p-4">
        <Menu />
      </aside>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Stats />
      </main>
    </div>
  );
}
