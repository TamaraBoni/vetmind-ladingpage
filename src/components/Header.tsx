import { Button } from "@/components/ui/button"
import logoUrl from "@/assets/logo_vetmind.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vetmind-navy text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <a href="/" aria-label="Página inicial" className="flex items-center gap-3">
          <img src={logoUrl} alt="VetMind" className="h-16 w-auto" />
        </a>

        <nav aria-label="primary" className="hidden md:flex items-center gap-10 text-lg lg:text-xl">
          <a href="#solucao" className="hover:text-vetmind-teal transition-colors">Nossa Solução</a>
          <a href="#quem-somos" className="hover:text-vetmind-teal transition-colors">Quem Somos</a>
          <a href="#contato" className="hover:text-vetmind-teal transition-colors">Contato</a>
        </nav>

        <Button
          asChild
          variant="outline"
          className="hidden sm:inline-flex border-white text-black hover:bg-white hover:text-vetmind-navy hover:border-white"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJn1GZ_Ot3LvFVxHeZwUnrM8q2NUJ2X3mnHfmW5N9X8mmzEg/viewform?usp=sharing&ouid=118399884714519279037"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Entrar na lista de espera"
          >
            Entrar na lista de espera
          </a>
        </Button>
      </div>
    </header>
  )
}

export default Header
