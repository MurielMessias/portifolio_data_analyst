import { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#00d4ff]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-[#00d4ff]/60 flex items-center justify-center group-hover:border-[#00d4ff] transition-colors">
            <BarChart2 size={16} className="text-[#00d4ff]" />
          </div>
          <span className="text-white font-light tracking-[0.2em] text-sm uppercase">MRM</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-[#00d4ff] text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#080808]/98 border-t border-[#00d4ff]/10">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-[#00d4ff] text-xs tracking-[0.15em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
