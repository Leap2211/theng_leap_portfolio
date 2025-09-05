import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <a href="#hero" className="text-xl font-bold text-primary">
          ThengLeap.co
        </a>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-card border-b border-border shadow-lg">
            <div className="flex flex-col items-center gap-4 py-4">
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;