const Footer = () => {
  return (
    <footer className="bg-vetmind-navy text-white py-8" id="contato">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-vetmind-teal rounded mr-3"></div>
              <span className="text-xl font-bold">VETMIND</span>
            </div>
            
            <div className="space-y-2 text-sm">
              <p>Contato:</p>
              <p>vetmind@outlook.com</p>
              <p>(11) 97965-4038</p>
              <p>São Paulo, SP</p>
            </div>
          </div>
          
          <div className="text-sm text-blue-200">
            <p>&copy; 2024 VetMind. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer