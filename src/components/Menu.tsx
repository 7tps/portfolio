'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Stats', href: '/' },
  { name: 'Inventory', href: '/inventory' },
  { name: 'Quest Log', href: '/quest-log' },
  { name: 'Options', href: '/options' },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <nav className="bg-retro-bg text-retro-accent font-pixel p-4 flex flex-col gap-4 shadow-pixel rounded-lg w-48">
      {menuItems.map((item) => (
        <Link key={item.name} href={item.href} legacyBehavior>
          <a
            className={`block px-4 py-2 rounded transition-all duration-150 border-2 border-retro-accent hover:bg-retro-accent hover:text-retro-bg cursor-pointer text-lg tracking-widest ${
              pathname === item.href ? 'bg-retro-accent text-retro-bg' : ''
            }`}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
} 