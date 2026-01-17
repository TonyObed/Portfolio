import { ArrowUpRight } from "lucide-react"

const experiences = [
  { period: "2023 - Présent", title: "Webmaster & Web Designer", company: "Freelance" },
  { period: "2022 - 2023", title: "Développeur Full-Stack", company: "TaNote" },
  { period: "2021 - 2022", title: "Stagiaire Cybersécurité", company: "Formation" },
  { period: "2020 - 2023", title: "Licence Réseaux & Génie Logiciel", company: "Université" },
]

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Decorative */}
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-primary text-8xl lg:text-9xl font-bold">✻</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">Mon Parcours</p>
              <h2 className="text-4xl lg:text-5xl font-bold">
                Expériences <span className="text-primary">Professionnelles</span>
                <br />& Formation
              </h2>
            </div>

            {/* Experience Cards */}
            <div className="bg-secondary rounded-2xl p-6 lg:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <div>
                      <p className="text-primary text-sm">{exp.period}</p>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
