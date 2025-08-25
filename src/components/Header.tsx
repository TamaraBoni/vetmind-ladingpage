import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-vetmind-navy text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-vetmind-teal rounded mr-3"></div>
          <span className="text-xl font-bold">VETMIND</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#solucao" className="hover:text-vetmind-teal transition-colors">Nossa Solução</a>
          <a href="#quem-somos" className="hover:text-vetmind-teal transition-colors">Quem Somos</a>
          <a href="#contato" className="hover:text-vetmind-teal transition-colors">Contato</a>
        </nav>
        
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-vetmind-navy"
        >
          Entrar na lista de espera
        </Button>
      </div>
    </header>
  )
}

export default Header