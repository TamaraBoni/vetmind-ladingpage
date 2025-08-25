const SupportersSection = () => {
  return (
    <section className="py-16 bg-vetmind-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-vetmind-navy mb-12 underline">
          Quem apoia a VetMind ?
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">NIDUS</span>
              </div>
              <p className="text-xs text-vetmind-gray">
                Innovation Learning<br />Development
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">Sebrae</span>
              </div>
              <p className="text-xs text-vetmind-gray">
                for Startups<br />SEBRAE Startup
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold text-xs">ABS</span>
              </div>
              <p className="text-xs text-vetmind-gray">
                ABSTARTUPS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportersSection