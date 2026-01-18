"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects-data"

const categories = [
  "Show All",
  "Design",
  "Marketing",
  "Développement",
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Show All")

  const filteredProjects =
    activeCategory === "Show All"
      ? projects
      : activeCategory === "Design"
        ? projects.filter((project) => ["Product Design", "Branding", "Graphics Design"].includes(project.category))
        : activeCategory === "Développement"
          ? projects.filter((project) => ["Development", "Mobile Apps"].includes(project.category))
          : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Mes Projets</h1>
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>•</span>
          <span className="text-primary">Mes Projets</span>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative pb-2 text-sm md:text-base transition-colors ${
                  activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
                {activeCategory === category && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-muted block"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={project.size === "tall" ? 500 : 350}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center mb-4 hover:bg-primary hover:border-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-1">{project.category}</p>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
