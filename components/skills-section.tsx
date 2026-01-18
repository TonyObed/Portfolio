import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const skills = [
  { name: "WordPress", percentage: 95, icon: "/images/WordPress1.png" },
  { name: "React/NextJS", percentage: 85, icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Figma", percentage: 90, icon: "/images/figma.png" },
  { name: "Photoshop", percentage: 88, icon: "/images/adobe-photoshop.png" },
  { name: "Kali Linux", percentage: 80, icon: "/images/Kali.png" },
  { name: "Illustrator", percentage: 85, icon: "/images/illu.png" },
  { name: "NodeJS", percentage: 75, icon: "/images/nodejs-logo.png" },
  { name: "Git/GitHub", percentage: 90, icon: "/images/gitub.jpg" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground">Mes Compétences</p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              {"Découvrez Mes"}
              <br />
              <span className="text-primary">Compétences & Outils</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Je maîtrise un large éventail d'outils et technologies pour le développement web, le design graphique et
              la cybersécurité, me permettant de livrer des projets complets et sécurisés.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-6">
              En Savoir Plus <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right - Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center text-center"
              >
                <div className={`${skill.name === "Kali Linux" ? "w-16 h-16" : "w-12 h-12"} mb-3`}>
                  <Image
                    src={skill.icon || "/placeholder.svg"}
                    alt={skill.name}
                    width={skill.name === "Kali Linux" ? 64 : 48}
                    height={skill.name === "Kali Linux" ? 64 : 48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-foreground font-medium mb-2">{skill.name}</p>
                <div className="w-full bg-secondary rounded-full px-3 py-1">
                  <span className="text-muted-foreground text-sm">{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
