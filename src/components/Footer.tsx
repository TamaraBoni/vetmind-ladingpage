// src/components/Footer.tsx
import { Mail, Phone, MapPin } from "lucide-react"
import vetmindLogo from "@/assets/logo_vetmind.png"

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#1E232B] text-white">
      {/* conteúdo principal */}
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Contato */}
          <div>
            <h3 className="text-xs font-semibold">Contato</h3>

            <ul className="mt-2 space-y-2 text-sm text-white/85">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white/70" />
                <a href="mailto:vetmind@outlook.com" className="hover:text-white">
                  vetmind@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-white/70" />
                <a href="tel:+5511975626535" className="hover:text-white">
                  (11) 97562-6535
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-white/70" />
                São Paulo, SP
              </li>
            </ul>
          </div>

          {/* Logo à direita */}
          <div className="md:ml-auto">
            <img
              src={vetmindLogo}
              alt="VetMind"
              className="h-8 md:h-10 w-auto"
            />
          </div>
        </div>
      </div>

      {/* linha divisória fina */}
       <div className="border-t border-white/10" />
        </footer>
  )
}

export default Footer