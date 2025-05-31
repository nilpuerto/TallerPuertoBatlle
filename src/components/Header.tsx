import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-taller-blue shadow-lg"
    )}>
      <nav className="w-full px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-white">
            Taller Puerto Batlle
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Inici
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Serveis
            </button>
            <button 
              onClick={() => scrollToSection('history')}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Història
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Comentaris
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Contacte
            </button>
            <button 
              onClick={() => scrollToSection('ubicacio')}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              Ubicació
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-600">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-200 transition-colors font-medium text-left"
              >
                Inici
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-blue-200 transition-colors font-medium text-left"
              >
                Serveis
              </button>
              <button 
                onClick={() => scrollToSection('history')}
                className="text-white hover:text-blue-200 transition-colors font-medium text-left"
              >
                Història
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-white hover:text-blue-200 transition-colors font-medium text-left"
              >
                Comentaris
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-200 transition-colors font-medium text-left"
              >
                Contacte
              </button>
              <button 
                onClick={() => scrollToSection('ubicacio')}
                className="text-white hover:text-blue-200 transition-colors font-medium text-left"
              >
                Ubicació
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};