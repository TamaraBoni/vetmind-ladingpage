import { UserCheck, Zap, Clock, FileText } from "lucide-react"

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <UserCheck className="w-12 h-12 text-vetmind-blue mb-4" />,
      title: "Mais confiança no diagnóstico",
      description: "Tenha segurança nas suas decisões com nossa ferramenta de apoio ao diagnóstico baseada em evidências científicas."
    },
    {
      icon: <Zap className="w-12 h-12 text-vetmind-blue mb-4" />,
      title: "Otimização do uso de antimicrobianos", 
      description: "Prescreva antibióticos de forma mais precisa e eficaz, reduzindo resistência bacteriana."
    },
    {
      icon: <Clock className="w-12 h-12 text-vetmind-blue mb-4" />,
      title: "Economia de tempo na sua rotina",
      description: "Agilize a interpretação de exames e foque no que realmente importa: o cuidado com seus pacientes."
    },
    {
      icon: <FileText className="w-12 h-12 text-vetmind-blue mb-4" />,
      title: "Melhor acompanhamento dos pacientes",
      description: "Mantenha um histórico completo e organizado de todos os tratamentos e resultados."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-vetmind-navy mb-12 underline">
          Benefícios
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-vetmind-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-vetmind-gray text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection