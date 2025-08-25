import { TrendingUp, DollarSign, Clock, HeartPulse } from "lucide-react"

const StatisticsSection = () => {
  const statistics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      percentage: "47%",
      description: "do custo médio da internação"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      percentage: "31,7%",
      description: "no custo com antibióticos"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      percentage: "70%",
      description: "no tempo de internação (dias)"
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      percentage: "16,3%",
      description: "mortalidade"
    }
  ]

  return (
    <section className="bg-vetmind-blue-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que falar de exame de microbiologia e resistência antimicrobiana ?
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Infecções por bactérias multirresistentes agravam o quadro clínico dos pets e 
            aumentam*:
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-vetmind-teal">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.percentage}
              </div>
              <p className="text-sm text-blue-100">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-center text-blue-200 mt-8">
          *Adaptado de uma revisão bibliográfica sobre redução em mortalidade após prescrição 
          de antibióticos baseada em resultado microbiológico.
        </p>
      </div>
    </section>
  )
}

export default StatisticsSection