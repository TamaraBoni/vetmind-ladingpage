// src/components/SupportersSection.tsx
import nidusLogo from "@/assets/logo-nidus.png"
import sebraeLogo from "@/assets/logo-sebrae.png"
import abstartupsLogo from "@/assets/logo-abstartups.png"

export default function SupportersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* título */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="relative inline-block text-3xl md:text-5xl font-extrabold text-vetmind-blue">
            Quem apoia a VetMind ?
            {/* sublinhado decorativo */}
            <span className="block mx-auto mt-2 h-1 w-11/12 rounded-full bg-vetmind-teal/70" />
          </h2>
        </div>

        {/* logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-10 lg:gap-32">
          <img
            src={nidusLogo}
            alt="NIDUS"
            className="h-16 sm:h-20 md:h-24 lg:h-52 w-auto object-contain opacity-95 hover:opacity-100 transition"
          />
          <img
            src={sebraeLogo}
            alt="Sebrae for Startups"
            className="h-16 sm:h-20 md:h-24 lg:h-20 w-auto object-contain opacity-95 hover:opacity-100 transition"
          />
          <img
            src={abstartupsLogo}
            alt="ABStartups"
            className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain opacity-95 hover:opacity-100 transition"
          />
        </div>
      </div>
    </section>
  )
}
