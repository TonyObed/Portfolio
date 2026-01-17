import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects, getProjectBySlug, getRelatedProjects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(slug, 3)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{project.title}</h1>
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>•</span>
          <span className="text-primary">{project.title}</span>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">We Create digital Product For Business</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <span className="float-left text-5xl font-serif text-foreground mr-3 mt-1 leading-none border border-border rounded-lg w-12 h-12 flex items-center justify-center">
                    S
                  </span>
                  <p className="mb-4">{project.description}</p>
                  <p>
                    Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aufugit
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    estqui dolorem ipsum quia dolor sit amet, consectetur, adipisici velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                    veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid consequature
                  </p>
                </div>
              </div>

              {/* Services Checklist */}
              <div className="grid grid-cols-2 gap-4">
                {project.services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar - Project Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 space-y-6 border border-border">
                <div>
                  <p className="text-primary text-sm mb-1">Category</p>
                  <p className="text-foreground font-semibold">{project.category}</p>
                </div>
                <div>
                  <p className="text-primary text-sm mb-1">Clients</p>
                  <p className="text-foreground font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-primary text-sm mb-1">Location</p>
                  <p className="text-foreground font-semibold">{project.location}</p>
                </div>
                <div>
                  <p className="text-primary text-sm mb-1">Published</p>
                  <p className="text-foreground font-semibold">{project.publishedDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} gallery ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Project Summary</h2>
          <p className="text-muted-foreground leading-relaxed">{project.summary}</p>

          {/* Tags & Share */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-foreground font-medium">Tags</span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-foreground font-medium">Share</span>
              <div className="flex gap-2">
                {["f", "t", "in", "ig"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`} className="group">
                <div className="rounded-2xl overflow-hidden bg-muted mb-4">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-primary text-sm mb-1">{relatedProject.category}</p>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {relatedProject.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
