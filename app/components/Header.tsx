import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            <span className="font-mono text-purple-400">{"</>"}</span>
            <span>
              Hasan<span className="text-purple-400">.</span>Jamal
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            <li className="m-0 p-0">
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Home
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#skills"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Skills
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#experience"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Experience
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#projects"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Projects
              </Link>
            </li>
            <li className="m-0 p-0">
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors text-base font-normal"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#contact"
            className="md:hidden text-purple-400 border border-purple-500/40 rounded-full px-4 py-1.5 text-sm hover:bg-purple-500/10 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
