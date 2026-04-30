import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#00d4ff]/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-px h-8 bg-[#00d4ff]/40" />
            <div>
              <div className="text-white font-black text-sm tracking-[0.2em]">Andre Muriel Ramos Messias</div>
              <div className="text-gray-600 text-xs tracking-widest uppercase font-mono">Data Analyst</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/MurielMessias?tab=repositories' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muriel-messias-1280b0302' },
              { icon: Mail, href: 'mailto:murielmessiasc137@gmail.com' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#00d4ff]/15 flex items-center justify-center text-gray-500 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all duration-300"
              >
                <item.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#00d4ff]/8 pt-8">
          <blockquote className="text-center mb-6">
            <p className="text-gray-600 text-xs italic leading-relaxed max-w-lg mx-auto">
              "O pensamento é o diálogo silencioso que a alma mantém consigo mesma."
            </p>
            <cite className="text-[#00d4ff]/40 text-xs tracking-widest block mt-1">— Hannah Arendt</cite>
          </blockquote>

          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-gray-700 text-xs font-mono">
            <span>© 2026 Andre Muriel Ramos Messias. Todos os direitos reservados.</span>
            <span className="text-[#00d4ff]/30">São Paulo, Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
