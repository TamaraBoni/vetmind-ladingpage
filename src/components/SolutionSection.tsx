import { Button } from "@/components/ui/button"

// Ícones (imagens)
import iconInterpret from "@/assets/img-interpretar.png"
import iconMobile from "@/assets/img-mobile.png"
import iconHistory from "@/assets/img-clock.png"
import iconShield from "@/assets/img-protecao.png"

// Vídeo MP4
import demoVideo from "@/assets/video_vetmind.mp4"

type Feature = {
  img: string
  alt: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    img: iconInterpret,
    alt: "Interpretar laudos",
    title: "Interprete laudos com maior segurança",
    description:
    "Análise detalhada de culturas e antibiograma assistida por IA. Recomendações baseadas em guidelines e literatura científica.",
  },
  {
    img: iconMobile,
    alt: "Acesse de onde estiver",
    title: "Acesse de onde estiver",
    description:
    "Use a VetMind em qualquer dispositivo, com design rápido e responsivo — tenha as informações certas na hora certa.",
  },
  {
    img: iconHistory,
    alt: "Histórico acessível",
    title: "Histórico sempre acessível",
    description:
    "Registre e consulte o histórico terapêutico antimicrobiano para apoiar decisões clínicas mais assertivas.",
  },
  {
    img: iconShield,
    alt: "Proteção de dados",
    title: "Proteção dos dados",
    description:
    "Boas práticas de segurança e conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
]

export default function SolutionSection() {
  return (
    <section id="solucao" className="py-16 bg-[hsl(var(--vetmind-gray-light))]">
    <div className="mx-auto max-w-6xl px-2">
    {/* título + subtítulo */}
    <div className="text-center mb-20">
    <h2 className="relative inline-block text-3xl md:text-5xl font-extrabold text-vetmind-blue">
    Nossa Solução
    <span className="block mx-auto mt-2 h-1 w-[320px] rounded-full bg-vetmind-teal" />
    </h2>
    <p className="mt-8 md:mt-16 text-base md:text-2xl text-[hsl(var(--vetmind-gray))] max-w-5xl mx-auto">
    Uma ferramenta para te auxiliar na interpretação do exame de cultura e antibiograma e realizar uma
    prescrição mais individualizada de antimicrobianos para o seu paciente.
    </p>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-11 lg:gap-2 items-start">
    {/* lista de features */}
    <div className="space-y-16 md:space-y-18">
    {features.map((f, i) => (
      <div key={i} className="flex items-start gap-10">
      {/* quadrado com degradê (mesmo tamanho entre todos) */}
      <div className="shrink-0 grid place-items-center h-24 w-24 md:h-36 md:w-36 rounded-2xl bg-gradient-to-br from-vetmind-blue-dark to-vetmind-teal-light shadow-[0_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-white/15">
      <img src={f.img} alt={f.alt} className="h-10 w-10 md:h-28 md:w-28 object-contain" />
      </div>
      
      <div>
      <h3 className="text-[21px] leading-snug font-bold text-vetmind-blue">{f.title}</h3>
      <p className="mt-2 text-[18px] leading-relaxed font-medium text-[hsl(var(--vetmind-gray))]">
      {f.description}
      </p>
      </div>
      </div>
    ))}
    </div>
    {/* coluna direita */}
    <div className="lg:pl-8">
    <div
    className="
      ml-auto w-full max-w-[28rem]
      rounded-2xl
      bg-[#E7EDF3]              /* cinza do card (um pouco mais escuro que o fundo) */
      p-6 md:p-8
      shadow-sm ring-1 ring-black/5
    "
    >
    <h3 className="text-2xl md:text-3xl font-extrabold text-vetmind-blue mb-5 text-center">
    Como funciona:
    </h3>
    
    {/* vídeo centralizado */}
    <div className="mx-auto w-full max-w-[20rem] rounded-xl overflow-hidden border border-black/10 shadow-sm mb-6">
    <video
    src={demoVideo}
    className="block w-full aspect-[9/16] object-cover"
    controls
    playsInline
    />
    </div>
    
    {/* botão centralizado */}
    <div className="flex justify-center">
    <Button
    asChild
    className="w-full sm:w-72 bg-red-400 hover:bg-red-700 text-white text-lg font-semibold"
    >
    <a href="https://forms.gle/SEU_FORM_AQUI" target="_blank" rel="noreferrer">
    Entre na lista de espera
    </a>
    </Button>
    </div>
    
    <p className="mt-3 mx-auto max-w-[220px] text-center text-2xs leading-snug text-[hsl(var(--vetmind-gray))]">
    Entre na lista e tenha acesso antecipado à nossa solução!
    </p>
    </div>
    </div>
    </div>
    </div>  
    
    
    </section>
  )
}
