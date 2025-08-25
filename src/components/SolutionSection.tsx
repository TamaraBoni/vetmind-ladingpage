import { BarChart3, Smartphone, History, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import labImage from "@/assets/lab-equipment.jpg"

const SolutionSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-vetmind-teal" />,
      title: "Interprete laudos com maior segurança",
      description: "Análise detalhada do resultado de culturas e antibiograma assistida por inteligência artificial. Recomendações de prescrições baseadas em protocolos internacionais e algoritmos científicos baseados na literatura médica"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-vetmind-teal" />,
      title: "Acesse de onde estiver",
      description: "Utilize a VetMind para analisar seus exames quando e onde você desejar em qualquer dispositivo. Com ampla compatibilidade, tenha as informações certas na palma da mão"
    },
    {
      icon: <History className="w-12 h-12 text-vetmind-teal" />,
      title: "Histórico sempre acessível",
      description: "Registre todo o histórico de resultados antimicrobianos dos seus pacientes, incluindo dados das interpretações anteriores que ajudam também na prevenção de novas infecções"
    },
    {
      icon: <Shield className="w-12 h-12 text-vetmind-teal" />,
      title: "Proteção dos dados",
      description: "Conte com uma plataforma de alta tecnologia contra perda de dados com metodologia de proteção de dados pessoais com protocolo de Lei Geral de Proteção de Dados"
    }
  ]

  return (
    <section className="py-16 bg-gradient-section" id="solucao">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vetmind-navy mb-4 underline">
            Nossa Solução
          </h2>
          <p className="text-lg text-vetmind-gray max-w-4xl mx-auto">
            Uma ferramenta para te auxiliar na interpretação do exame de cultura e antibiograma e realizar uma prescrição mais 
            individualizada de antimicrobianos para o seu paciente
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 border-l-4 border-l-vetmind-teal pl-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-vetmind-navy mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-vetmind-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-vetmind-blue-dark rounded-lg p-8 text-white text-center">
              <div className="w-24 h-24 bg-vetmind-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-vetmind-blue font-bold text-lg">VM</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Como funciona:</h3>
              
              <div 
                className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url(${labImage})` }}
              ></div>
              
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                Entre na lista de espera
              </Button>
              
              <p className="text-xs text-blue-100 mt-4">
                Lançamento oficial em janeiro! Antecipe a versão exclusiva
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection