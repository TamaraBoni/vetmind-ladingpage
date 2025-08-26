// src/components/BenefitsSection.tsx
// Imagens dos benefícios
import imgConfianca from "@/assets/img-confianca.png"
import imgOtimizacao from "@/assets/img-otimizacao.png"
import imgTempo from "@/assets/img-economiatempo.png"
import imgAcompanhamento from "@/assets/img-acompanhamento.png"

type Benefit = {
  img: string
  alt: string
  title: string
}

const benefits: Benefit[] = [
  {
    img: imgConfianca,
    alt: "Mais confiança no diagnóstico",
    title: "Mais confiança no diagnóstico",
  },
  {
    img: imgOtimizacao,
    alt: "Otimização do uso de antimicrobianos",
    title: "Otimização do uso de antimicrobianos",
  },
  {
    img: imgTempo,
    alt: "Economia de tempo na sua rotina",
    title: "Economia de tempo na sua rotina",
  },
  {
    img: imgAcompanhamento,
    alt: "Melhor acompanhamento dos pacientes",
    title: "Melhor acompanhamento dos pacientes",
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-20">
          <h2 className="relative inline-block text-3xl md:text-5xl font-extrabold text-vetmind-blue">
            Benefícios
            <span className="block mx-auto mt-2 h-1 w-56 rounded-full bg-vetmind-teal" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="h-full rounded-2xl text-center flex flex-col items-center"
            >
              {/* imagem do benefício */}
              <img
                src={b.img}
                alt={b.alt}
                className="mb-4 h-20 w-20 md:h-72 md:w-72 object-contain"
              />

              <h3 className="text-[18px] md:text-[20px] font-semibold text-vetmind-blue mb-4">
                {b.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
