// src/components/StatisticsSection.tsx
import custoImg from "@/assets/img-custo.png"
import antibioticoImg from "@/assets/img-antibiotico.png"
import tempoImg from "@/assets/img-tempo.png"
import mortalidadeImg from "@/assets/img-mortlidade.png"

type Stat = {
  img: string
  alt: string
  percentage: string
  description: string
}

const statistics: Stat[] = [
  { img: custoImg, alt: "Custo de internação", percentage: "47%", description: "do custo médio da internação" },
  { img: antibioticoImg, alt: "Custo com antibióticos", percentage: "31,7%", description: "no custo com antibióticos" },
  { img: tempoImg, alt: "Tempo de internação", percentage: "70%", description: "no tempo de internação (dias)" },
  { img: mortalidadeImg, alt: "Mortalidade", percentage: "16,3%", description: "mortalidade" },
]

export default function StatisticsSection() {
  return (
    <section className="bg-[#39566A] text-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* título + subtítulo */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Por que falar de exame de microbiologia e resistência antimicrobiana?
          </h2>
          <p className="mt-16 text-white font-light text-3xl md:text-3xl">
            Infecções por bactérias multirresistentes agravam o quadro clínico dos pets e aumentam*:
          </p>
        </div>

       {/* grid de cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  {statistics.map((s, i) => (
    <div
      key={i}
      className="rounded-2xl bg-black/15 backdrop-blur-sm px-5 py-2 shadow-lg ring-1 ring-white/10 text-center"
    >
      {/* IMAGEM DIRETA, SEM CÍRCULO, MAIOR */}
      <div className="mb-4 flex justify-center">
        <img
          src={s.img}
          alt={s.alt}
          className="h-28 w-auto md:h-32 object-contain"
        />
      </div>

      <div className="mt-2 text-2xl md:text-3xl font-]bold text-white">{s.percentage}</div>
      <p className="mt-2 text-2xl md:text-1xl font-]bold text-white">{s.description}</p>
    </div>
  ))}
</div>

        {/* rodapé da seção */}
        <p className="text-xs text-white/80 text-center mt-12">
          *Allegretti D. et al. (2025) Multidrug-resistant wound infections are associated with greater mortality, larger costs, and longer hospitalizations than susceptible infections in canine patients. JAVMA. 
        </p>
      </div>
    </section>
  )
}
