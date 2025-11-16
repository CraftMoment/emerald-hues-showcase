import { motion } from "framer-motion";
import { ParallaxSection } from "./ParallaxSection";
import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Starter",
    price: "2.500.000",
    description: "Untuk bisnis baru yang butuh online presence profesional",
    features: [
      "Free Domain (.com)",
      "Shared Hosting (6 Bulan)",
      "Desain Responsif (Mobile & Desktop)",
      "3 Halaman Utama (Home, About, Contact)",
      "1 Email Bisnis",
      "2 GB Disk Storage",
      "2x Revisi Gratis",
      "Free SSL",
      "Form Kontak Langsung ke WhatsApp",
      "Garansi Maintenance 15 Hari",
      "Video Panduan Akses Website",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "4.000.000",
    description: "Paket terpopuler untuk bisnis yang ingin berkembang",
    features: [
      "Semua yang ada di Starter, plus:",
      "Hosting 1 Tahun",
      "5-6 Halaman (Home, About, Services, Portfolio/Clients, Contact, FAQ)",
      "2 Email Bisnis",
      "Desain Premium dan Clean",
      "10 GB Disk Storage",
      "Galeri Foto / Testimoni",
      "SEO On-Page Dasar (Meta, ALT, Struktur Heading)",
      "2x Revisi Gratis",
      "Garansi Maintenance 1 Bulan",
    ],
    popular: true,
  },
  {
    name: "Executive",
    price: "6.500.000",
    description: "Untuk perusahaan yang butuh website profesional premium",
    features: [
      "Semua yang ada di Growth, plus:",
      "8-10 Halaman (termasuk Career, Blog, atau Request Khusus)",
      "Request Fitur Tambahan (Popup, Accordion, Pricing Table, dll)",
      "Integrasi Instagram Feed / YouTube Embed",
      "Speed Optimization (Lazy Load + Caching Tools)",
      "Desain Interaktif (Parallax, Scroll Animasi)",
      "3 Email Bisnis",
      "5x Revisi Gratis",
      "Garansi Maintenance 1,5 Bulan",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricelist" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <ParallaxSection offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pricelist <span className="text-primary">Layanan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solusi lengkap untuk bantu bisnis Anda eksis di dunia digital!
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ParallaxSection key={plan.name} offset={20 + index * 5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <Card
                  className={`p-8 h-full flex flex-col relative transition-all duration-300 ${
                    plan.popular
                      ? "border-primary border-2 shadow-elegant scale-105"
                      : "border-2 hover:border-primary/50 hover:shadow-elegant"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                        <Star className="h-4 w-4 fill-current" />
                        Terpopuler
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="text-sm text-muted-foreground">Rp</span>
                      <span className="text-4xl font-bold text-primary ml-1">
                        {plan.price.split(".")[0]}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        .{plan.price.split(".")[1]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Order Sekarang
                  </Button>
                </Card>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground italic">
            *Harga dapat disesuaikan berdasarkan kebutuhan spesifik proyek Anda
          </p>
        </motion.div>
      </div>
    </section>
  );
}
