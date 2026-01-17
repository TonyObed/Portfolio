export interface Project {
  id: number
  slug: string
  category: string
  title: string
  image: string
  size: "tall" | "medium"
  client: string
  location: string
  publishedDate: string
  description: string
  summary: string
  tags: string[]
  services: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "mobile-application-design",
    category: "Product Design",
    title: "Mobile Application Design",
    image: "/placeholder.svg?height=600&width=800",
    size: "tall",
    client: "X_Design Studio",
    location: "Melbourne, Australia",
    publishedDate: "September 25, 2023",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque seeney laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis",
    summary:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    tags: ["Design", "Figma", "Apps"],
    services: [
      "Branding & Design",
      "Digital Marketing",
      "Web Development",
      "Product Design",
      "Mobile Apps Design",
      "System & Guide",
      "Graphics Design",
      "Content Management",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 2,
    slug: "website-mockup-design",
    category: "Branding",
    title: "Website Mockup Design",
    image: "/placeholder.svg?height=350&width=400",
    size: "medium",
    client: "Creative Agency",
    location: "New York, USA",
    publishedDate: "October 12, 2023",
    description:
      "Creating stunning website mockups that showcase your brand's digital presence with modern aesthetics and user-centered design principles.",
    summary:
      "This project involved creating comprehensive website mockups for a leading creative agency. The design focuses on clean layouts, intuitive navigation, and engaging visual elements that capture the brand's innovative spirit.",
    tags: ["Web", "UI/UX", "Mockup"],
    services: ["Branding & Design", "Web Development", "Product Design", "Graphics Design"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 3,
    slug: "business-card-design",
    category: "Graphics Design",
    title: "Business Card Design",
    image: "/placeholder.svg?height=500&width=400",
    size: "tall",
    client: "Jon Henrey",
    location: "London, UK",
    publishedDate: "August 18, 2023",
    description:
      "Premium business card designs that make a lasting first impression with elegant typography and sophisticated layouts.",
    summary:
      "Designed a series of professional business cards featuring minimalist aesthetics, premium paper textures, and thoughtful typography that reflects the client's brand identity.",
    tags: ["Print", "Branding", "Design"],
    services: ["Branding & Design", "Graphics Design", "Content Management"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 4,
    slug: "product-photography",
    category: "Marketing",
    title: "Product Photography",
    image: "/placeholder.svg?height=300&width=400",
    size: "medium",
    client: "Lifestyle Brand",
    location: "Paris, France",
    publishedDate: "November 5, 2023",
    description:
      "High-quality product photography that showcases products in their best light with creative compositions and styling.",
    summary:
      "A comprehensive product photography project featuring creative lighting setups, props, and compositions that highlight product features and appeal to target audiences.",
    tags: ["Photography", "Marketing", "Product"],
    services: ["Digital Marketing", "Content Management", "Branding & Design"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 5,
    slug: "e-commerce-platform",
    category: "Development",
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=350&width=400",
    size: "medium",
    client: "Fashion Retailer",
    location: "Milan, Italy",
    publishedDate: "December 1, 2023",
    description:
      "Full-featured e-commerce platform with seamless user experience, secure payments, and inventory management.",
    summary:
      "Developed a complete e-commerce solution featuring product catalogs, shopping cart functionality, secure checkout, and an intuitive admin dashboard for inventory management.",
    tags: ["E-commerce", "Development", "Web"],
    services: ["Web Development", "Product Design", "Digital Marketing", "System & Guide"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 6,
    slug: "fitness-app-interface",
    category: "Mobile Apps",
    title: "Fitness App Interface",
    image: "/placeholder.svg?height=500&width=400",
    size: "tall",
    client: "FitLife Inc",
    location: "San Francisco, USA",
    publishedDate: "January 15, 2024",
    description:
      "Modern fitness app interface with intuitive workout tracking, progress visualization, and social features.",
    summary:
      "Designed a comprehensive fitness application featuring workout libraries, progress tracking, nutrition logging, and community features to help users achieve their health goals.",
    tags: ["Mobile", "Health", "UI/UX"],
    services: ["Mobile Apps Design", "Product Design", "Branding & Design", "System & Guide"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 7,
    slug: "dashboard-ui-kit",
    category: "Product Design",
    title: "Dashboard UI Kit",
    image: "/placeholder.svg?height=300&width=400",
    size: "medium",
    client: "SaaS Startup",
    location: "Berlin, Germany",
    publishedDate: "February 8, 2024",
    description: "Comprehensive dashboard UI kit with reusable components, data visualization, and dark/light themes.",
    summary:
      "Created an extensive UI kit for dashboard applications including charts, tables, forms, and navigation components with consistent design language and accessibility features.",
    tags: ["UI Kit", "Dashboard", "Design"],
    services: ["Product Design", "Web Development", "System & Guide", "Graphics Design"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 8,
    slug: "logo-collection",
    category: "Branding",
    title: "Logo Collection",
    image: "/placeholder.svg?height=350&width=400",
    size: "medium",
    client: "Various Clients",
    location: "Global",
    publishedDate: "March 20, 2024",
    description:
      "A curated collection of logo designs showcasing versatile brand identity solutions across different industries.",
    summary:
      "This portfolio piece showcases a variety of logo designs created for clients across different industries, demonstrating versatility in style from minimalist to elaborate concepts.",
    tags: ["Logo", "Branding", "Identity"],
    services: ["Branding & Design", "Graphics Design", "Content Management"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: 9,
    slug: "illustration-series",
    category: "Graphics Design",
    title: "Illustration Series",
    image: "/placeholder.svg?height=400&width=400",
    size: "tall",
    client: "Publishing House",
    location: "Tokyo, Japan",
    publishedDate: "April 10, 2024",
    description: "A series of digital illustrations combining traditional art styles with modern design sensibilities.",
    summary:
      "Created a unique series of digital illustrations for a publishing house, blending traditional artistic techniques with contemporary digital tools to produce visually striking artwork.",
    tags: ["Illustration", "Art", "Digital"],
    services: ["Graphics Design", "Content Management", "Branding & Design"],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject) return projects.slice(0, limit)

  return projects
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === currentProject.category && b.category !== currentProject.category) return -1
      if (b.category === currentProject.category && a.category !== currentProject.category) return 1
      return 0
    })
    .slice(0, limit)
}
