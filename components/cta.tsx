"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Hemen Ücretsiz Keşif Talep Edin
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Çatı, oluk veya izolasyon projeniz için bugün bizi arayın. 
            Uzman ekibimiz ücretsiz keşif için hazır!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto text-base px-8 py-6 gap-2 rounded-2xl"
            >
              <a href="tel:+905399130646">
                <Phone className="w-5 h-5" />
                Hemen Ara
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 gap-2 rounded-2xl bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {"WhatsApp'tan Yaz"}
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/70 text-sm">
            <a href="tel:+905399130646" className="hover:text-primary-foreground transition-colors">
              +90 539 913 06 46
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+905354176319" className="hover:text-primary-foreground transition-colors">
              +90 535 417 63 19
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
