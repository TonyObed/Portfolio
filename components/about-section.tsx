import { Check, Phone, MapPin } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "Développement Web", col: 1 },
  { name: "Cybersécurité", col: 2 },
  { name: "Design UI/UX", col: 1 },
  { name: "Branding & Logo", col: 2 },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground">À Propos de Moi</p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Spécialisé en <span className="text-primary">Développement Web</span>
              <br />
              Sécurisé & Design Digital
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Je crée des solutions web sécurisées et performantes en combinant compétences techniques (réseaux,
              développement full-stack, ethical hacking) et créativité graphique (UI/UX, branding, identité visuelle).
              Mon approche unique : Allier code propre, design moderne et sécurité renforcée pour livrer des projets qui
              font la différence.
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">Formation :</strong> Licence 3 Réseaux & Génie Logiciel |
              Certifications en Ethical Hacking
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Contact Cards */}
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-3 bg-secondary rounded-full px-6 py-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Téléphone</p>
                  <p className="text-foreground">+225 0711492428</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-secondary rounded-full px-6 py-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Localisation</p>
                  <p className="text-foreground">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Bouagba Anassé Obed"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Floating Cards */}
              <div className="absolute top-1/3 left-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-background font-medium text-sm">Web Designer</span>
                <span className="text-background">↗</span>
              </div>
              <div className="absolute bottom-1/4 left-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-background font-medium text-sm">Cybersécurité Expert</span>
                <span className="text-background">↗</span>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/4 right-1/4 text-primary text-2xl">✻</div>
          </div>
        </div>
      </div>
    </section>
  )
}
