import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-muted-foreground text-lg">{"Bonjour, je suis"}</p>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-primary">Bouagba Anassé</span>
              <br />
              <span className="text-foreground">Obed Jékuthinpmel</span>
            </h1>
            <p className="text-lg text-muted-foreground">Webmaster, Cybersécurité & Web Designer</p>
            <p className="text-muted-foreground max-w-md">
              Je crée des solutions web sécurisées et performantes en combinant compétences techniques et créativité
              graphique.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-6">
                Me Contacter <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="link" className="text-foreground underline">
                Télécharger CV <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Center - Photo */}
          <div className="lg:col-span-1 flex justify-center relative">
            <div className="relative w-96 h-[500px] lg:w-[500px] lg:h-[600px]">
              {/* Lime green shape behind */}
              <div
                className="absolute top-1/4 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-primary rounded-full"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 50%)" }}
              />
              {/* Dark circle */}
              <div className="absolute top-0 left-0 w-48 h-48 lg:w-56 lg:h-56 bg-secondary rounded-full" />
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-full border-4 border-secondary overflow-hidden">
                  <Image
                    src="/images/Obedg.png"
                    alt="Bouagba Anassé Obed Jékuthiel"
                    width={700}
                    height={700}
                    className="w-full h-full object-cover"
                    style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 50%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 50%)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="lg:col-span-1 flex flex-col gap-4 items-end">
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-xs">
              <p className="text-4xl font-bold text-primary">2+</p>
              <p className="text-muted-foreground">Années d'Expérience</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-xs">
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground">Projets Complétés</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-xs">
              <p className="text-4xl font-bold text-primary">90%+</p>
              <p className="text-muted-foreground">Clients Satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
