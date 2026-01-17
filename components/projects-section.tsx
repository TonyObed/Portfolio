import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    category: "Projet IA Éducatif",
    title: "TaNote",
    description:
      "Conception d'un répétiteur intelligent basé sur l'IA pour élèves et étudiants. Mise en place de l'architecture technique, système de génération de contenu, Design UX/UI.",
    image: "/placeholder.svg?height=400&width=600",
    layout: "right",
  },
  {
    category: "Plateforme E-Commerce",
    title: "GD Immobilier / Urban Style",
    description:
      "Création complète d'un site e-commerce. Développement et mise en production, Optimisation SEO, Création du logo et de la charte graphique, Conception des maquettes UI/UX.",
    image: "/placeholder.svg?height=400&width=600",
    layout: "left",
  },
  {
    category: "Branding",
    title: "Logo & Identité Visuelle",
    description:
      "Je crée des identités visuelles cohérentes et professionnelles pour les entreprises et les projets web. Mon objectif est de donner à chaque marque une image claire et reconnaissable.",
    image: "/placeholder.svg?height=400&width=600",
    layout: "right",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                project.layout === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {project.layout === "left" ? (
                <>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <button className="absolute top-4 right-4 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <p className="text-primary">{project.category}</p>
                    <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <p className="text-primary">{project.category}</p>
                    <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group">
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </button>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <button className="absolute top-4 right-4 w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
              Voir Plus de Projets <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
