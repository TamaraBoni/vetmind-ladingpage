const AboutSection = () => {
  return (
    <section className="py-16 bg-vetmind-navy text-white" id="quem-somos">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="w-32 h-32 bg-vetmind-teal rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-vetmind-blue font-bold text-2xl">VM</span>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <span className="text-2xl font-bold">VETMIND</span>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left underline">
              Quem Somos
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Na VetMind, unimos tecnologia e ciência para transformar a rotina do 
                médico veterinário.
              </p>
              
              <p>
                Nosso time é formado por veterinários e microbiologistas com 
                experiência acadêmica e de mercado.
              </p>
              
              <p>
                Criamos a VetMind para ser sua parceira no cuidado animal, auxiliando 
                em diagnósticos mais assertivos, com inovação e praticidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection