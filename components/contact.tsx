"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, MapPin, Send, Instagram } from "lucide-react"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - in production, connect to backend
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent(
      `Merhaba, ben ${formData.name}. ${formData.message}\n\nTelefon: ${formData.phone}`
    )
    window.open(`https://wa.me/905399130646?text=${message}`, '_blank')
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", phone: "", message: "" })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="iletisim" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">İletişim</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-muted-foreground text-lg">
            Sorularınız için bizi arayın veya formu doldurun, size en kısa sürede dönelim
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-card border-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Telefon</h3>
                  <a href="tel:+905399130646" className="text-muted-foreground hover:text-primary transition-colors block">
                    +90 539 913 06 46
                  </a>
                  <a href="tel:+905354176319" className="text-muted-foreground hover:text-primary transition-colors block">
                    +90 535 417 63 19
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/905399130646" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hemen Mesaj Gönderin
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/kaplaninsaat41/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @kaplaninsaat41
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card border-border rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Konum</h3>
                  <p className="text-muted-foreground">
                    Kocaeli, Türkiye
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card className="bg-card border-border rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d384838.98254986894!2d29.617503699999997!3d40.76553255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f7c5d68e7ab%3A0x8c51a3b8de1c1f7!2sKocaeli%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sus!4v1699999999999!5m2!1str!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kocaeli Harita"
              />
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ücretsiz Keşif Formu</h3>
              
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Ad Soyad</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Adınız ve soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="phone">Telefon</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-xl"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="message">Mesajınız</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder="Projeniz hakkında bilgi verin..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="rounded-xl resize-none"
                    />
                  </Field>
                </FieldGroup>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-2xl gap-2 mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Gönderiliyor..."
                  ) : isSubmitted ? (
                    "Gönderildi!"
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Gönder
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                Formunuz WhatsApp üzerinden bize iletilecektir
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
