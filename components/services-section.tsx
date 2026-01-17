import { ArrowUpRight } from "lucide-react"

const services = [
  { number: "01.", title: "Développement Web", description: "WordPress, React, NextJS, API, SEO" },
  { number: "02.", title: "Cybersécurité", description: "Ethical Hacking, Audit, Protection, Analyse Réseau" },
  { number: "03.", title: "Design UI/UX", description: "Maquettes, Prototypes, Expérience Utilisateur" },
  { number: "04.", title: "Logo & Branding", description: "Identité visuelle, Charte graphique, Logos" },
  { number: "05.", title: "E-Commerce", description: "Boutiques en ligne, Paiement, Gestion des stocks" },
  { number: "06.", title: "Maintenance & SEO", description: "Optimisation, Mises à jour, Référencement" },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">Services Populaires</p>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Mes <span className="text-primary">Services Spécialisés</span> Pour
            <br />
            Votre Développement Digital
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-card border border-border rounded-2xl p-6 flex items-center justify-between group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="text-2xl font-bold text-muted-foreground">{service.number}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
