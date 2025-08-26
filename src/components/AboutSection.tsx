// src/components/AboutSection.tsx
import logoBig from "@/assets/logocompleto_vetmind.png"

export default function AboutSection() {
  return (
    <section
      id="quem-somos"
      className="bg-[#39566A] text-white py-16 border-y border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-[340px,1fr] gap-10 md:gap-14 items-start">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logoBig}
              alt="VetMind"
              className="h-44 md:h-72 w-auto drop-shadow-md"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Quem Somos
              <span className="block mt-2 h-1 w-80 rounded-full bg-white/40" />
            </h2>

            <div className="mt-12 space-y-7 text-justify text-base md:text-xl leading-relaxed">
              <p>
                Na VetMind, unimos tecnologia e ciência para transformar a
                rotina do médico veterinário.
              </p>
              <p>
                Nosso time é formado por veterinários e microbiologistas com
                experiência acadêmica e de mercado.
              </p>
              <p>
                Criamos a VetMind para ser sua parceira no cuidado animal,
                auxiliando em diagnósticos mais assertivos, com inovação e
                praticidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
