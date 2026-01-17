"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Projets", href: "#projects" },
  { name: "Compétences", href: "#skills" },
  { name: "À Propos", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-portfichier-201.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">Bouagba Anassé Obed J.</span>
            </Link>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Liens Rapides</h3>
            <nav className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Newsletter */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 flex-1 bg-transparent border-b border-border pb-2">
                <Mail className="w-5 h-5 text-primary" />
                <input
                  type="email"
                  placeholder="Adresse Email"
                  className="bg-transparent text-foreground placeholder:text-muted-foreground outline-none flex-1"
                />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                {"S'inscrire"} <span className="ml-1">{">"}</span>
              </Button>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground">Abidjan, Côte d'Ivoire</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">Tonyobed360@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground">+225 0711492428</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Retour en haut"
          >
            <ChevronUp className="w-6 h-6 text-primary-foreground" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground">
            Copyright @2026, <span className="text-primary">Bouagba Anassé Obed J.</span> Tous droits réservés
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
